export type routeItem = {
	title: string;
	path?: string;
	open?: boolean;
	routes?: routeItem[];
}