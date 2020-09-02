import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import { FormControlLabel, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    show: {
        height: 700,
    },
    hide: {
        height: 180,
    },
    container: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing(1),
    },
}));

export default function SimpleCollapse() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);


    const handleChange = () => {
        setChecked((prev) => !prev);
    }

    return (
        <div className={`x${checked ? 'show' : 'hide'}`}>
            <div className={classes.container}>
                <Collapse in={checked} collapsedHeight={135}>
                    <Typography variant="subtitle1" gutterBottom>
                        <p>GIẢM THÊM 200K CHO MỌI BOOKING. NHẬP MÃ: TRAVELMAG36_6THG</p>

                        <p>Homestay chúng mình nằm ngay trung tâm thành phố, sát gần Nhà thờ Đức Bà và Vincom Đồng Khởi. Nằm ở trên tầng 5 chung cư và không có thang máy. Có thể bạn sẽ ngại leo thang nhưng tin mình đi, trải nghiệm tại căn hộ sẽ không khiến bạn thất vọng. Nếu bạn cần trợ giúp với hành lý, hãy liên hệ chúng mình để được phụ mang đồ lên nhé!</p>

                        <p>Ngoài ra, vì lý do an ninh, tòa nhà có giờ giới nghiêm sau 12 giờ đêm. Do đó, chúng mình mong bạn sẽ về nhà trước 12 giờ.</p>

                        <p>Một số điểm mà các bạn ghé chơi Homestay của chúng mình rất thích và khen:</p>

                        <p>- Đầy đủ các tiện nghi như TV có kết nối Internet và Netflix, bếp trang bị đủ đồ để bạn có thể nấu nướng cơ bản, bãi đỗ xe máy ngay tầng trệt</p>

                        <p>- View phòng nhìn thẳng ra Nhà thờ Đức Bà, bạn có thể nghe tiếng chuông nhà thờ rất chill nhé :)</p>

                        <p>-Căn studio với hai giường lớn phục vụ thoải mái 4 người. Với một sofabes, nhóm 5 người cũng có thể lưu trú tại homestay!</p>

                        <p>- Ở nhà bọn mình, mọi người chỉ mất 5 phút để đi bộ ra TẤT CẢ các địa điểm du lịch nổi tiếng của Thành phố HCM</p>

                        <p>- Xung quanh khu vực nhà tụi mình có nhiều điểm ăn uống nổi tiếng, có thể đi bộ tới được luôn như: Nhà hàng Au Parc, nhà hàng món Việt Secret Garden, phố ẩm thực Nhật Nguyễn Văn Lung</p>

                        <p>Ngoài ra còn nhiều tiện ích khác:</p>

                        <p>- 7eleven nằm dưới tầng trệt chung cư</p>

                        <p>- Siêu thị Co.op Food ngay dưới chung cư tiện lợi cho bạn mua đồ nấu ăn</p>
                    </Typography>
                </Collapse>

            </div>
            <h3 onClick={handleChange} style={{ color: 'orange' }}>{
                checked === false ? "Đọc thêm" : "Thu gọn"
            }</h3>
        </div >
    );
}