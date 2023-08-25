import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from "./main/main.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./main/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'basic',
                loadChildren: () => import('./main/basic/basic.module').then(m => m.BasicModule)
            },
            {
                path: 'layer',
                loadChildren: () => import('./main/layer/layer.module').then(m => m.LayerModule)
            },
            {
                path: 'projection',
                loadChildren: () => import('./main/projection/projection.module').then(m => m.ProjectionModule)
            },
            {
                path: 'cluster',
                loadChildren: () => import('./main/cluster/cluster.module').then(m => m.ClusterModule)
            },
            {
                path: 'label',
                loadChildren: () => import('./main/label/label.module').then(m => m.LabelModule)
            },
            {
                path: 'renderer',
                loadChildren: () => import('./main/renderer/renderer.module').then(m => m.RendererModule)
            },
            {
                path: 'symbol',
                loadChildren: () => import('./main/symbol/symbol.module').then(m => m.SymbolModule)
            },
            {
                path: 'animation',
                loadChildren: () => import('./main/animation/animation.module').then(m => m.AnimationModule)
            },
            {
                path: 'tile',
                loadChildren: () => import('./main/tile/tile.module').then(m => m.TileModule)
            },
            {
                path: 'analysis',
                loadChildren: () => import('./main/analysis/analysis.module').then(m => m.AnalysisModule)
            },
            {
                path: 'sandbox',
                loadChildren: () => import('./main/sandbox/sandbox.module').then(m => m.SandboxModule)
            },
            {
                path: 'lesson',
                loadChildren: () => import('./main/lesson/lesson.module').then(m => m.LessonModule)
            },
            {
                path: 'document',
                loadChildren: () => import('./main/document/document.module').then(m => m.DocumentModule)
            },
            {
                path: '**',
                redirectTo: 'sandbox'
            }
        ]
    },
    // Not found
    {path: '**', redirectTo: 'main'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
