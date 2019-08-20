export const BackToHomeAction = {
  title: {
    'zh-CN': '返回主页',
    'en-US': 'Back To Home',
  },
  buttonType: 'primary',
  browserHandler: 'BACK_TO_HOME',
};

export const InstallDependencyAction = {
  title: {
    'zh-CN': '安装依赖',
    'en-US': 'Install Dependencies',
  },
  handler: {
    type: '@@actions/installDependencies',
    payload: {
      npmClient: true,
      projectPath: true,
    },
  },
};

export const ReInstallDependencyAction = {
  title: {
    'zh-CN': '重新安装依赖',
    'en-US': 'Reinstall Dependencies',
  },
  handler: {
    type: '@@actions/reInstallDependencies',
    payload: {
      npmClient: true,
      projectPath: true,
    },
  },
};

export const OpenConfigFileAction = {
  title: {
    'zh-CN': '打开配置文件',
    'en-US': 'Open Configuration File',
  },
  handler: {
    type: '@@actions/openConfigFile',
    payload: {
      projectPath: true,
    },
  },
};