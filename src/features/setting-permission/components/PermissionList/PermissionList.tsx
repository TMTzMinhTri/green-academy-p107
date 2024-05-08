import { Fragment, useState } from 'react';
import { useDisclosure } from '@/hooks/useDisclosure';
import { usePermissions } from '@/services/permission/usePermisions';
import Add from '@mui/icons-material/Add';
import EditNoteIcon from '@mui/icons-material/EditNote';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Backdrop, CircularProgress } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Case, Default, Switch } from '@/components/atoms';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const PermissionList = () => {
  const { data, isLoading } = usePermissions();
  const { isOpen: openFormModal, open, close } = useDisclosure();
  const [parentId, setParentId] = useState<number | null>(null);

  const toggleCollapse = (id: number | null) => {
    setParentId((prev) => (prev === id ? null : id));
  };

  return (
    <Fragment>
      <Card>
        <CardContent>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Permissions</Typography>
              <Button variant="contained" color="primary" onClick={open}>
                <Add />
              </Button>
            </Stack>
            <TableContainer component={Paper} variant="outlined" sx={{ position: 'relative', minHeight: 500 }}>
              <Switch>
                <Case condition={isLoading === true}>
                  <Backdrop open invisible sx={{ position: 'absolute' }}>
                    <CircularProgress />
                  </Backdrop>
                </Case>
                <Default>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Parent</TableCell>
                        <TableCell align="right" />
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data?.data.map((item) => (
                        <Fragment key={item.id}>
                          <TableRow>
                            <TableCell component="th" scope="row">
                              {item.name}
                            </TableCell>
                            <TableCell align="right">{item.parent_id}</TableCell>
                            <TableCell align="right">
                              <IconButton>
                                <EditNoteIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        </Fragment>
                      ))}
                    </TableBody>
                  </Table>
                </Default>
              </Switch>
            </TableContainer>
          </Stack>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Pagination />
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default PermissionList;
