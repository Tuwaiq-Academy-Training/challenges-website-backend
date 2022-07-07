import axios from "axios";
import { prompt } from "inquirer";
import { baseUrl, globalData } from "../..";

export async function createResevation() {
	const { data: tourguide } = await axios.get(baseUrl + '/tourguide');
	const formattedTourGuide = tourguide.map((c: any) => ({name:c.name,price:c.price,experience:c.experience,languages:c.languages,city:c.city}));
	console.table(formattedTourGuide);
		
	const {date,payment,tourguide_id} = await prompt([
		{
			type: 'input',
			name: 'date',
			message: 'Enter the date  ',
		},

		{
			type: 'list',
			name: 'payment',
			message: 'choose your payment method ',
			choices: ['cash', 'card','voucher'],
		},
		{type: 'number',
		name: 'tourguide_id',
		message: 'Enter index of tour guide to choose🐬',
		filter:(val)=>+val
		
	},]);
	try{
		const index=tourguide[tourguide_id]
		 await axios.post(baseUrl + `tourist/create/reservation`, {
		
			payment:payment,
			tourguide_id:index.tourguide_id,
			...date
		 },{
		 headers:{
			 token:globalData.token,
		 }
		})
		//from index file
		// export const globalData: any = {
		// 	token: '',
		// };
}catch (err: any) {
	console.log(err?.response?.data);
	process.exit(0);
}




	
}