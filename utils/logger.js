import { isModuleSpecifier } from '@babel/types';

const info = (...params) => {
	console.log(...params);
};

const error = (...params) => {
	console.log(...params);
};

modules.export = {
	info,
	error
};
