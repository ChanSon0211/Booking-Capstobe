import React from 'react'
import { useSelector } from 'react-redux'
import { Tabs } from 'antd';
import { getScheduleMovieCinema } from '../utils/bookService';
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment/moment';

const ScheduleMovie = () => {

    const [listSchedule, setLishSchedule] = useState([])
    const cinemas = useSelector(state => state.booking.cinemas);
    useEffect(() => {
        getScheduleMovieCinema(cinemas[0]?.maHeThongRap).then(res =>

            setLishSchedule(res.data.content)
        )
    }, [cinemas])
    console.log(listSchedule)
    return (
        <div>
            <Tabs
                onChange={(key) => {
                    getScheduleMovieCinema(key).then(res =>

                        setLishSchedule(res.data.content)

                    )

                }}
                tabPosition="left"
                items={
                    cinemas.map(itemRap => {
                        return {
                            label: <img className='w-24' src={itemRap.logo} alt="" />,
                            key: itemRap.maHeThongRap,
                            children: <Tabs 
                            tabPosition='left'
                            items={listSchedule && listSchedule.length > 0 &&
                                listSchedule[0].lstCumRap.map(itemListCumRap => {
                                 return{
                                    label: <div>
                                        <h3><img src={itemListCumRap.hinhAnh} alt="" /></h3>
                                        <p>{itemListCumRap.tenCumRap}</p>
                                        <br/>
                                        <p>{itemListCumRap.diaChi}</p>

                                    </div> ,
                                    key:itemListCumRap.maCumRap,
                                    children: <Tabs 
                                    tabPosition='left'
                                    items={itemListCumRap.danhSachPhim.map(itemListLichChieu => {
                                        return{
                                            label: <div>
                                                <img className='w-24' src={itemListLichChieu.hinhAnh} alt=""/>
                                                <p>{itemListLichChieu.tenPhim}</p>
                                                <p>{itemListLichChieu.hot}</p>
                                                <p>{itemListLichChieu.dangChieu}</p>
                                            </div> ,
                                            key:itemListLichChieu.maPhim,
                                            children: <Tabs
                                            tabPosition='left'
                                            items={itemListLichChieu.lstLichChieuTheoPhim.map(itemListLichChieuTheoPhim=>{
                                                return{
                                                    label:<div>
                                                        <p>
                                                            {itemListLichChieuTheoPhim.tenRap}
                                                            <br/>
                                                            {moment(itemListLichChieuTheoPhim.ngayChieuGioChieu).format("DD/YY/MM HH-ss")}
                                                        </p>
                                                    </div>,
                                                    key:itemListLichChieuTheoPhim.maLichChieu,
                                                }
                                            })}
                                            />
                                        }
                                    })}
                                    
                                    />,
                                 }
                                    
                                 
                                })}
                            
                            
                            /> 
                        }
                    })


                }



            />

        </div >
    )
}

export default ScheduleMovie