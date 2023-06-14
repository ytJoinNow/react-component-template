import { defineConfig } from 'dumi';
import path from 'path';

const globalSass = path.resolve(__dirname, 'node_modules/@alifd/theme-epweb-default/variables.scss');

const xdfLogo = "/logo";

export default defineConfig({
  title: ' ',
  favicon: xdfLogo,
  logo: xdfLogo,
  base: `/`,
  publicPath: `/`,
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
  resolve: {
    includes: ['packages/daxue-design-mobile/src', 'packages/daxue-design-web/src'],
  },
  navs: [
    null
  ],
  themeConfig: {
    carrier: '新东方',
    deviceWidth: 375,
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] }
      ],
    }
  },
  nodeModulesTransform: {
    type: 'none',
  },
  sass: {},
  mfsu: {},
  chainWebpack: (config: any) => {
    const oneOfsMap = config.module.rule('sass').oneOfs.values();
    oneOfsMap.forEach((item: any) => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: globalSass,
        })
        .end();
    });
  },
  // more config: https://d.umijs.org/config
});
