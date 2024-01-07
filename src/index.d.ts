declare function Raistrom(options: Raistrom.ILoggerOptions): Raistrom.Logger;

declare namespace Raistrom {
	export interface ILoggerOptions {
		debug?: boolean;
	}

	export class Logger {
		public constructor(public options: ILoggerOptions);
		public act(type: number, message: string, hook?: boolean);
	}
}

export = Raistrom;