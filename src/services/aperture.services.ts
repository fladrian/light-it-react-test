import axios from "./base.services";
import { Resources } from "../constants/Enums";
import { ICategory } from "../interfaces/ICategories";

const resource = Resources.ABERTURAS;

export const GetApertures = async(): Promise<ICategory[] | undefined> => {
	try {
		const {data,status} = await axios.get(resource)
		if(status===200){
			return data
		}
	} catch (error) {
		console.error(error)	
	}
}