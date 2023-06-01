// import { ClientId, clientSecret, redirectUrl } from "..";
import { setCookie } from "cookies-next";
import { NextApiRequest, NextApiResponse } from "next";

const getAccessToken = (code: string) => {
  return new Promise<IAccessTokenProps>((resolve, reject) => {
    fetch("http://localhost:3000/oauth/token", {
      method: "POST",
      body: JSON.stringify({
        client_id: process.env.NEXT_PUBLIC_API_KEY,
        client_secret: process.env.NEXT_PUBLIC_API_SECRET,
        redirect_uri: process.env.NEXT_PUBLIC_CALLBACK_HOST,
        grant_type: "authorization_code",
        code,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        throw new Error(error);
      });
  });
};

interface IAccessTokenProps {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { code } = req.query;
  if (code) {
    const response: IAccessTokenProps = await getAccessToken(code as string);
    setCookie("AccessToken", response.access_token, {
      req,
      res,
      secure: true,
      httpOnly: true,
    });
    return res.redirect("/");
  }
  return res.status(404).redirect("/404");
}
