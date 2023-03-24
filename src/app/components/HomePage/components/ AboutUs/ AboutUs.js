import React from 'react'
import classes from './ AboutUs.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

import img1 from '../../../../../../image/img1.png'
import img2 from '../../../../../../image/img2.png'

const  AboutUs = () => {
  return (
    <div className={classes.container}>
        <div className={classes.rowBetween}>
            <div className={classes.left}>
                <div className={classes.row}>
                    <Image alt={'img'}
                        src={img1}
                        className={classes.img}
                    />
                    <p className={classes.text}>
                        Không công bằng khi thông tin không được tiếp cận bình đẳng như nhà đầu tư chuyên nghiệp...
                    </p>
                </div>
                <div className={classes.contentImg}>
                  
                </div>
                
            </div>
            <div className={classes.right}>
                <p className={classes.title}>Về Chúng Tôi</p>
                <p className={classes.text}>
                    BlueStar ra đời xuất phát từ một ý tưởng của một nhà đầu tư gắn bó hơn 16 năm với thị trường chứng khoán 
                    và 13 năm làm việc tại các vị trí từ phân tích dữ liệu đến quản lý danh mục và quản lý cao cấp tại một trong 
                    các công ty chứng khoán hàng đầu thị trường. Phạm Ngọc Bách nghĩ rằng, thật không công bằng với hầu hết mọi người 
                    tham gia thị trường chứng khoán khi không được tiếp cận thông tin một cách bình đẳng giống như những nhà đầu tư chuyên nghiệp. 
                    Vì vây, anh ấy và một vài người đã quyết định thành lập Bluestar để đưa tới các sản phẩm phân tích đầu tư đến tất cả mọi người.
                </p>
            </div>
        </div>
    </div>
  )
}

export default  AboutUs