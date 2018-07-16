import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuickViewComponent} from './quick-view/quick-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'quick-view'},

  // 品类分析  categoryAnalysis
  {path: 'category-analysis', loadChildren: './category-analysis/category-analysis.module#categoryAnalys'},

  // 本地速览 quickView
  {path: 'quick-view', component: QuickViewComponent},

  // 区域分析  regionalAnalysis
  {path: 'regional-analysis', loadChildren: './regional-analysis/regional-analysis.module#regionalAnalysisModule'},

  // 店铺分析 shopAnalysis
  {path: 'shop-analysis', loadChildren: './shop-analysis/shop-analysis.module#shopAnalysisModule'},

  // 单品分析  singleProductAnalysis
  {path: 'single-product-analysis', loadChildren: './single-product-analysis/single-product-analysis.module#singleProductAnalysisModule'},

  // 趋势分析  trendAnalysis
  {path: 'trend-analysis', loadChildren: './trend-analysis/trend-analysis.module#trendAnalysisModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {
}
