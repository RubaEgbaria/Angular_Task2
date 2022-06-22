export interface Account {
	id: number;
	clientName: string;
	description: string;
	legalEntity: string;
	address: Address;
	departments: Department[];
	contacts: Contact[];
}

export interface Address {
	id: number;
	city: string;
	country: string;
	buildingRef: string;
	faxNo: string;  
	mobileNo: string;
}

export interface Department {
	id: number;
	name: string;
	classification: string;
}

export interface Contact {
	id: number;
	title: string;
	name: string;
	position: string;
}
