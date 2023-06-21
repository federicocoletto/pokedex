import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
	const [apiInfo, setApiInfo] = useState();
	const [hasError, setHasError] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	const getApi = () => {
		axios
			.get(url)
			.then((res) => {
				setApiInfo(res.data);
				setHasError(false);
				setIsLoading(false);
			})
			.catch(() => {
				setHasError(true);
			});
	};

	return [apiInfo, getApi, hasError, setApiInfo, isLoading, setIsLoading];
};

export default useFetch;
