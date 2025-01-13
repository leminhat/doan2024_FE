import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { api } from "../../../config/apiConfig";
import { toast } from "react-toastify";

function VnpayCallback() {
    const [searchParams] = useSearchParams();
    const [message, setMessage] = useState("");

    
        // Lấy tất cả tham số từ query string
        const params = Object.fromEntries(searchParams.entries());
        console.log("Dữ liệu từ VNPAY:", params);

        const resCode = params.vnp_ResponseCode
        // Gửi params đến backend để xác minh giao dịch
        if(resCode == "00"){
                const verifyPayment = async () => {
                    try {
                        console.log("Gửi tham số:", params);
                        const response = await api.post("/api/payment/verify", params); 
                        console.log("Phản hồi từ server:", response);
                        setMessage("Thanh toán thành công")



                    //     if (response.data.success) {
                    //         alert("Thanh toán thành công!");
                    //     } else {
                    //         alert("Xác minh thất bại: " + response.data.message);
                    //     }
                    } catch (error) {
                        console.error("Lỗi khi xác minh thanh toán:", error);
                        toast.error('Có lỗi xảy ra khi xác minh giao dịch!')
                      
                    }
                };

                verifyPayment();
        }
    

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>

            <h2>Đang xử lý thanh toán...</h2>
            {message && <p>{message}</p>}
        </div>
    );
}

export default VnpayCallback;
