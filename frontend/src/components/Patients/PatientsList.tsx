import { Box, Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { NavLink } from 'react-router-dom';

function PatientsList() {

    const baseURL = "http://localhost:3000/patients";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [seletedItem, setSeletedItem] = useState(null);

    const [open, setOpen] = useState(false);

    const handleClickOpen = (id: any) => {
        setOpen(true);
        setSeletedItem(id)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getItems = async () => {
        setLoading(true)
        await axios.get(baseURL, { params: { select: "first_name,last_name,date_of_birth" } }).then((res) => {
            setData(res.data);
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
        })

    }

    const deleteItems = () => {
        axios.delete(`${baseURL}/${seletedItem}`).then((res) => {
            setData(res.data);
            getItems();
            handleClose();
        })
    }


    useEffect(() => {
        getItems();
    }, [])
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"คุณยืนยันที่จะลบรายการนี้หรือไม่?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>ยกเลิก</Button>
                    <Button onClick={deleteItems} autoFocus>
                        ยืนยัน
                    </Button>
                </DialogActions>
            </Dialog>
            <Box sx={{ mb: { xs: "15px", sm: "30px" }, display: 'flex', justifyContent: 'flex-end' }}>

                <Button variant="contained">เพิ่มข้อมูล</Button>
            </Box>
            <Grid container spacing={2}>
                {!loading && data.map((item: any) => {
                    return (<Grid item key={item._id} md={4} sm={6} xs={12}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {item.first_name}  {item.last_name}
                                    {loading}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    วันเดือนปีเกิด : {item.date_of_birth}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={`/details/${item._id}`} >
                                    ดูรายละเอียด
                                </Button>
                                <Button size="small" color="error" onClick={() => handleClickOpen(item._id)}>ลบ</Button>
                            </CardActions>
                        </Card>
                    </Grid>)

                })}
            </Grid>

        </>
    )
}

export default PatientsList