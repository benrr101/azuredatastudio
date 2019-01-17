/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// This is the place for API experiments and proposal.

import * as core from 'sqlops';
import * as vscode from 'vscode';

declare module 'sqlops' {

	export namespace extensionManagement {
		export function install(vsixPath: string): Thenable<string>;
	}

	export namespace objectexplorer {
		/**
		 * get object explorer node context menu actions
		 */
		export function getNodeActions(connectionId: string, nodePath: string): Thenable<string[]>;
	}
}
