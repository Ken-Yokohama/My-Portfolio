import axios from "axios";

export const getPageVisitCount = async () => {
    const getIp = await axios.get("https://api.db-ip.com/v2/free/self");
    const count = await axios.get(
        "https://api.countapi.xyz/hit/kenyokohama/" + getIp.data.ipAddress
    );
    return count.data.value;
};
