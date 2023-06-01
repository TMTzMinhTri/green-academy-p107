import { ReactNode } from "react";
import OAuth2Login from "react-simple-oauth2-login";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { NextPage } from "next";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import qs from "query-string";

import BaseLayout from "@/layouts/BaseLayout";

type GetAccessToken = (data: Record<string, any>) => void;

const getAccessToken: GetAccessToken = (data) => {
  // fetch("http://localhost:3000/oauth/token", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     client_id: ClientId,
  //     client_secret: clientSecret,
  //     redirect_uri: redirectUrl,
  //     grant_type: "authorization_code",
  //     code: data.code,
  //   }),
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
};

const loginByGrantTypePassword = () => {
  fetch("http://localhost:3000/oauth/token", {
    method: "POST",
    body: JSON.stringify({
      email: "tmtzminhtri@gmail.com",
      password: "123123",
      client_id: process.env.NEXT_PUBLIC_API_KEY,
      client_secret: process.env.NEXT_PUBLIC_API_SECRET,
      // redirect_uri: redirectUrl,
      grant_type: "password",
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "omit",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
const loginByGrantTypeClientCredentials = () => {
  fetch("http://localhost:3000/oauth/token", {
    method: "POST",
    body: JSON.stringify({
      client_id: process.env.NEXT_PUBLIC_API_KEY,
      client_secret: process.env.NEXT_PUBLIC_API_SECRET,
      grant_type: "client_credentials",
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials: "omit",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

const handleCallApi = () => {
  // fetch("http://localhost:3000/api/v1/demo", {
  //   method: "GET",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: accessToken,
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //   });

  console.log(getCookie("AccessToken"));
};

interface IResponseFromOAuth {
  code: string;
}

const onFailure = (response: any) => console.error(response);

const HomePage: NextPage = () => {
  const loginUrl = qs.stringifyUrl({
    url: `${process.env.NEXT_PUBLIC_API_HOST}/oauth/authorize`,
    query: {
      client_id: process.env.NEXT_PUBLIC_API_KEY,
      client_secret: process.env.NEXT_PUBLIC_API_SECRET,
      redirect_uri: process.env.NEXT_PUBLIC_CALLBACK_HOST,
      grant_type: "authorization_code",
      response_type: "code",
      scope: "public",
    },
  });
  console.log(loginUrl);
  return (
    <Container maxWidth="xl">
      <ButtonGroup variant="text" color="primary" aria-label="">
        <OAuth2Login
          authorizationUrl="http://localhost:3000/oauth/authorize"
          scope="public"
          responseType="code"
          clientId={process.env.NEXT_PUBLIC_API_KEY || ""}
          redirectUri={process.env.NEXT_PUBLIC_CALLBACK_HOST || ""}
          onSuccess={getAccessToken}
          onFailure={onFailure}
          render={({ buttonText, onClick, className }) => (
            <Button onClick={onClick} className={className}>
              {buttonText}
            </Button>
          )}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={loginByGrantTypePassword}
        >
          Login By Password
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={loginByGrantTypeClientCredentials}
        >
          Login By Client Credentials
        </Button>
        <Button variant="contained" color="success" onClick={handleCallApi}>
          Test api
        </Button>
      </ButtonGroup>
      {/* <Link href={loginUrl}>Login</Link> */}
      <Link href="/products">Login</Link>
    </Container>
  );
};

HomePage.getLayout = (page: ReactNode) => {
  return <BaseLayout>{page}</BaseLayout>;
};

export default HomePage;
