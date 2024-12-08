import React, { useState, useEffect } from 'react';
import Typography from "components/Typography";
import Box from "components/Box";
import Avatar from "components/Avatar";
import Badge from "components/Badge";
import Table from "examples/Tables/Table";
import { useGetCareers } from "queries/ProductQuery";
import { Link } from "react-router-dom";
import { Icon, TextField, Button,Pagination  } from "@mui/material";
import PropTypes from 'prop-types';

function Author({id,name, desc }) {
  return (
    <Box key={id} display="flex" alignItems="center" px={1} py={0.5}>
      
      <Box display="flex" flexDirection="column">
        <Typography variant="button" fontWeight="medium">
          {name.slice(0,50)}
        </Typography>
        <Typography variant="caption" color="secondary">
          {desc.slice(0,30)}
        </Typography>
      </Box>
    </Box>
  );
}
Author.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

const TableData = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('createdAt');
  const [order, setOrder] = useState('desc');
  const [search, setSearch] = useState('');

  const { data, isLoading } = useGetCareers({ page, perPage, sortBy, order, search });

  // useEffect(() => {
  //   refetch();
  // }, [page, perPage, sortBy, order, search]);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const columns = [
    { name: "careers", align: "left" },
    { name: "status", align: "center" },
    { name: "createdon", align: "center" },
    { name: "Lastupdated", align: "center" },
    { name: "action", align: "center" },
  ]
console.log('data?.docs12',data?.docs);

  const rows = data?.docs?.map(item => ({
    careers: <Author id={item._id} name={item?.name} desc={item?.place} />,
    status: (
      <Badge variant="gradient" badgeContent={item?.isAvailable ? 'Active' : 'Blocked'} color={item?.isAvailable ? "success" : 'secondary'} size="xs" container />
    ),
    createdon: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.createdAt).toDateString()}
      </Typography>
    ),
    Lastupdated: (
      <Typography variant="caption" color="secondary" fontWeight="medium">
        {new Date(item?.updatedAt).toDateString()}
      </Typography>
    ),
    action: (
      <Link to={`/careers/editCareers/${item?._id}`}>
        <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
          more_vert
        </Icon>
      </Link>
    ),
  }));

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between" py={2}>
        <TextField
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          variant="outlined"
          size="small"
          style={{marginLeft:'5px'}}
        />
        <Box>
          <Button onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
            Sort by {sortBy} ({order})
          </Button>
        </Box>
      </Box>
      {isLoading ? (
        <Typography fontSize={14} sx={{ paddingX: 5 }}>loading...</Typography>
      ) : (
        <Table columns={columns} rows={rows} />
      )}
      <Box style={{display:'flex',justifyContent:'center', Margin:'10px'}}>
        <Pagination
          count={Math.ceil((data?.totalDocs || 0) / perPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </>
  );
};

export default TableData;