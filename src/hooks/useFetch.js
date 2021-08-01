import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState();

    useEffect(() => {
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error('Could not fetch data');
            } else {
                return response.json();
            }
        }).then((data) => {
            setData(data);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [url])

    return { data };
}

export default useFetch;