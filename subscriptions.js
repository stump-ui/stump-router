import { dispatcher } from "stump";
import { setCurrentRoute } from "./router.js";

export const onURLChange = dispatcher(dispatch => {
	addEventListener("popstate", _ => {
		console.log("POPSTATE");
		dispatch(setCurrentRoute);
	})
});