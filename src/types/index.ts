export type ToastData = {
  id: string,
  title: string,
  subtitle?: string,
  body?: string,
}

export type ToastContent = Omit<ToastData, 'id'>;

export type IDrawerProps = {
  showDrawer: () => void,
  hideDrawer: () => void,
}
