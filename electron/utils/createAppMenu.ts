import { Menu } from 'electron';

export const CreateAppMenu = (): Menu =>
  Menu.buildFromTemplate([
    {
      label: 'Arquivo',
      submenu: [
        {
          label: 'Sair',
          role: 'quit',
        },
      ],
    },
    {
      label: 'Editar',
      submenu: [
        {
          label: 'Desfazer',
          role: 'undo',
        },
        {
          label: 'Refazer',
          role: 'redo',
        },
        {
          type: 'separator',
        },
        {
          label: 'Recortar',
          role: 'cut',
        },
        {
          label: 'Copiar',
          role: 'copy',
        },
        {
          label: 'Colar',
          role: 'paste',
        },
        {
          label: 'Deletar',
          role: 'delete',
        },
        {
          type: 'separator',
        },
        {
          label: 'Selecionar tudo',
          role: 'selectAll',
        },
      ],
    },
    {
      label: 'Visualização',
      submenu: [
        {
          label: 'Recarregar',
          role: 'reload',
        },
        {
          label: 'Forçar recarregamento',
          role: 'forceReload',
        },
        {
          label: 'Abrir devtools',
          role: 'toggleDevTools',
        },
        {
          type: 'separator',
        },
        {
          label: 'Resetar zoom',
          role: 'resetZoom',
        },
        {
          label: 'Aumentar zoom',
          role: 'zoomIn',
        },
        {
          label: 'Reduzir zoom',
          role: 'zoomOut',
        },
        {
          type: 'separator',
        },
        {
          label: 'Modo tela cheia',
          role: 'togglefullscreen',
        },
      ],
    },
    {
      label: 'Janela',
      submenu: [
        {
          label: 'Minimizar',
          role: 'minimize',
        },
        {
          label: 'Zoom',
          role: 'zoom',
        },
        {
          label: 'Fechar',
          role: 'close',
        },
      ],
    },
    {
      label: 'Ajuda',
      submenu: [
        {
          label: 'Atualizar',
        },
        {
          label: 'Suporte remoto',
        },
        {
          label: 'Sobre',
        },
      ],
    },
  ]);
