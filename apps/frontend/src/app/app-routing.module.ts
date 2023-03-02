import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: (): Promise<Routes | any> =>
			import('./pages/login/login.module').then((m) => m.LoginModule),
	},
	{
		path: '',
		loadChildren: (): Promise<Routes | any> =>
			import('./pages/main/main.module').then((m) => m.MainModule),
	},
	{
		path: '**',
		loadChildren: (): Promise<Routes | any> =>
			import('./pages/not-found/not-found.module').then(
				(m) => m.NotFoundModule,
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
