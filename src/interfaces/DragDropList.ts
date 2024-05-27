
export interface LayoutProps {
    title?: string;
    TitleComponent?: React.ReactNode;
    className?: string;
    listClassName?: string;
    enableAddButton?: boolean;
    buttonComponent?: React.ReactNode;
    dragHandler?: boolean;
    displayName: string;
    showToggleIcon?: boolean;
    dataId: string;
    searchEnabled?: boolean;
    dragDirection: 'both' | 'horizontal' | 'vertical';
    groupName?: string;
    buttonIcon?: string;
    toggleEnable?: boolean;
    toggleIconClass?: string;
    toggleClass?: string;
    dragIcon?: string;
    showDragIcon?: boolean;
    showLockIcon?: boolean;
    itemActionComponent?: (data: any) => React.ReactNode;
    itemClickable?: boolean;
    dataSource: any[];
    allowReordering?: boolean;
    hoverStateEnabled?: boolean;
    allowItemDeleting?: boolean;
    listHeight?: number;
    onStateChange?: (state: any) => void;
    onRemove?: (item: any) => void;
    onItemReordered?: (event: any) => void;
    onAdd?: (event: any) => void;
    onItemClick?: (event: any) => void;
    onDragChange?: (event: any) => void;
    onItemDeleted?: (event: any) => void;
  }
  
