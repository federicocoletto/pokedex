import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
	const [apiInfo, setApiInfo] = useState();
	const [hasError, setHasError] = useState(true);

	const getApi = () => {
		axios
			.get(url)
			.then((res) => {
				setApiInfo(res.data);
				setHasError(false)
			})
			.catch((err) => {
				setHasError(true)
			});
	};

	return [apiInfo, getApi, hasError, setApiInfo];
};

export default useFetch;
