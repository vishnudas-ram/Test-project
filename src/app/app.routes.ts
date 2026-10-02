import { Routes } from '@angular/router';
import { canMatchGuard } from './routeGuards/canMatchGuard';
import { canActivateGuard } from './routeGuards/canActivateGuard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'rxjs/:id',
        loadComponent: () => import('../app/components/rxjs/rxjs').then(m => m.Rxjs)
    },
    {
        path: 'hooks',
        loadComponent: () => import('../app/components/hooks/hooks').then(m => m.Hooks),
        // canMatch : [canMatchGuard]
        canActivate: [canActivateGuard]

    },
    {
        path: 'websocket',
        loadComponent: () => import('../app/components/websocket/web-sockets/web-sockets').then(m => m.WebSockets)
    },
    {
        path: 'deferable',
        loadComponent: () => import('../app/components/deferable/deferable').then(m => m.Deferable),
        canMatch : [canMatchGuard]
    },
    {
        path: 'onpush',
        loadComponent: () => import('../app/components/onpush/onpush').then(m => m.Onpush),
    },
    {
        path: 'cdk-table',
        loadComponent: () => import('../app/components/cdk-table/cdk-table').then(m => m.CdkTable),
    },
    {
        path: 'cdn',
        loadComponent: ()=> import('../app/components/cdn-img/cdn-img').then(m=> m.CdnImg)
    },
    {
        path: 'cdk-scroll',
        loadComponent: ()=> import('../app/components/cdk-scroll/cdk-scroll').then(m=> m.CdkScroll)
    },
    {
        path: 'file-upload',
        loadComponent: ()=> import('../app/components/file-upload/file-upload').then(m=> m.FileUpload)
    },
];
