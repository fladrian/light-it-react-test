import axios from "./base.services";
import { AxiosResponse } from "axios";
import { Resources } from "../constants/Enums";
import { ICategory } from "../interfaces/ICategories";

const resource = Resources.EQUIPAMENTO;

export const GetEquipments = async(): Promise<ICategory[]|undefined> => {
	try {
		const {data,status} = await axios.get(resource)
		if(status===200){
			return data
		}
	} catch (error) {
		console.error(error)	
	}
}