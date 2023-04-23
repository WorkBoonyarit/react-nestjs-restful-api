import { Avatar, Box, Chip, Divider, Grid, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CakeIcon from '@mui/icons-material/Cake';
import TransgenderIcon from '@mui/icons-material/Transgender';
import axios from 'axios';

function PatientsDetails() {
    const baseURL = "http://localhost:3000/patients";
    const [data, setData] = useState(null) as any;
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const getItems = async () => {
        setLoading(true)
        await axios.get(`${baseURL}/${id}`).then((res) => {
            setData(res.data);
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
        })

    }


    useEffect(() => {
        getItems();
    }, [])
    return (
        <>
            {!loading && data && (<Paper variant="outlined" sx={{ p: 5, borderRadius: 2 }} elevation={0}>

                <Typography variant="h6" gutterBottom>
                    คุณ {data.first_name} {data.last_name}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item md={8} sm={6} xs={12}>
                        <Divider light>
                            <Chip label="ประวัติการรักษา" sx={{ my: 3 }} />
                        </Divider>
                        <Box>
                            {data.medical_history}
                        </Box>
                        <Divider light >
                            <Chip label="ข้อมูลการติดต่อ" sx={{ my: 3 }} />
                        </Divider>
                        <Box>
                            {data.contact_info}
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Box>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemIcon>
                                        <CakeIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="วันเดือนปีเกิด"
                                        secondary={
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {data.date_of_birth}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                                <ListItem alignItems="flex-start">
                                    <ListItemIcon>
                                        <TransgenderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="เพศ"
                                        secondary={
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {data.gender}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </List>
                        </Box>

                    </Grid>
                </Grid>
            </Paper>)}

        </>

    )
}

export default PatientsDetails