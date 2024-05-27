
import List, { ItemDragging} from 'devextreme-react/list'
import { ItemClickEvent, ItemReorderedEvent } from 'devextreme/ui/list';
import 'devextreme/dist/css/dx.light.css';
import './style.css';
import { LayoutProps } from '../../interfaces';



const defaultProps: Partial<LayoutProps> = {          
    enableAddButton: false,    
    dragHandler: false,   
    showToggleIcon: false,
    searchEnabled: false,
    groupName: 'dragDropGroup',
    buttonIcon: 'icon dx-icon-plus',
    toggleEnable: false,
    toggleIconClass: "icon dx-icon-chevrondown",
    dragIcon: 'icon dx-icon-dragvertical',
    showDragIcon: true,
    showLockIcon: true,
    itemClickable: false,
    allowReordering: true,
    hoverStateEnabled: false,
    allowItemDeleting: false,
    listHeight: 0,
  };

export const DragDropList: React.FC<LayoutProps> = (props) => {
    const {
        TitleComponent,       
        listClassName,
        enableAddButton,
        buttonComponent,
        dragHandler,
        showToggleIcon,
        searchEnabled,
        dragDirection,
        groupName,
        buttonIcon,
        toggleEnable,
        dragIcon,
        showDragIcon,
        showLockIcon,
        itemActionComponent,
        itemClickable,
        dataSource,
        allowReordering,
        hoverStateEnabled,
        allowItemDeleting,
        listHeight,
        onStateChange,
        onRemove,
        onItemReordered,
        onAdd,
        onItemClick,
        onDragChange,
        onItemDeleted,
    } = { ...defaultProps, ...props };

    const onItemClickHandler = (e: ItemClickEvent<any, any>) => {
        if (itemClickable) {
            onItemClick?.({ panelName: props.title, itemId: e.itemData.id, operation: 'click', ...e });
            onStateChange?.({ panelName: props.title, itemId: e.itemData.id, operation: 'click', ...e });
        }
    }

    const ItemTemplate = (data: { [key: string]: any }) => {
        if (!data.hasOwnProperty('draggable')) {
            data['draggable'] = true;
        }

        if (!data.draggable && showLockIcon) {
            return <div className={`dx-element-title  dx-element-item locked-item`} id={` ${data[props.dataId]}`}> <i className="dx-icon-lock" style={{ marginRight: 5 }}></i>
                {data[props.displayName]}
            </div>
        }

        return <div className={`dx-element-title dx-element-item`} id={`${data[props.dataId]}`}>
            {(!data.draggable && showLockIcon) && <i className="dx-icon-lock" style={{ marginRight: 5 }}></i>}
            {(showDragIcon && data.draggable) && <i className={dragIcon} style={{ marginRight: 5 }}></i>}
            {data[props.displayName || '']}
            {itemActionComponent && itemActionComponent({ ...data, panelName: props.title })}
        </div>
    }

    const onItemReorderedHandler = (e: ItemReorderedEvent<any, any>) => {
        onItemReordered?.({ panelName: props.title, operation: 'reorder', ...e });
        onStateChange?.({ panelName: props.title, operation: 'reorder', ...e });
    }

    const onAddHandler = (e: any) => {
        onAdd?.({ operation: 'Add Item', ...e });
        onStateChange?.({ operation: 'Add Item', ...e });
    }

    const onRemoveHandler = (e: any) => {
        onRemove?.({ operation: 'Remove Item', ...e });
        onStateChange?.({ operation: 'Remove Item', ...e });
    }

    const onDragStart = (e: any) => {
        const itemId = e.itemElement[0].getElementsByClassName('dx-element-title')[0]?.getAttribute(props.dataId);       
        const item = dataSource?.find(ele => ele[props.dataId] === +itemId);

        if (!item?.draggable) {
            e.cancel = true; // Cancel dragging for this item
        }
        e.itemData = item;
    }

    const toggleLayout = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let nextElem = (e.target as HTMLElement).nextSibling as HTMLElement;
        if (nextElem) {
            nextElem.classList.toggle('element-none');
        }
    }

    const addClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onStateChange?.({ panelName: props.title, operation: 'Click on Button', event: e });
    }

    const onItemDeletedHandler = (e: any) => {
        onStateChange?.({ panelName: props.title, operation: 'Item Deleted', ...e });
        onItemDeleted?.({ panelName: props.title, operation: 'Item Deleted', ...e });
    }

    return (
        <div className={`${props.className ??''} ${!dragHandler ? 'hide-drag-handler': ''}  dx-drag-drop `} >
            {TitleComponent ? TitleComponent : (
                <div {...(toggleEnable && { onClick: toggleLayout, style: { cursor: 'pointer' } })} className={`${props.toggleClass ?? ''}  dx-layout-title `}>
                    {showToggleIcon && <i className={props.toggleIconClass?? ''}></i>}
                    {props.title}
                    {buttonComponent !== '' && enableAddButton ? buttonComponent : enableAddButton && (
                        <button className={` dx-button-mode-text dx-add-layout `} onClick={addClickHandler}> <i className={buttonIcon}></i> </button>
                    )}
                </div>
            )}
            <List
                onItemClick={(e) => onItemClickHandler(e)}
                onItemReordered={(e) => onItemReorderedHandler(e)}
                dataSource={dataSource} 
                itemRender={ItemTemplate}
                className={listClassName}
                focusStateEnabled={false}
                searchEnabled={searchEnabled}
                searchExpr={props.displayName}
                hoverStateEnabled={hoverStateEnabled}
                {...(listHeight && { height: listHeight })}
                scrollByContent={false}
                pageLoadMode='scrollBottom'
                allowItemDeleting={allowItemDeleting}
                onItemDeleted={onItemDeletedHandler}
                itemDeleteMode="slideItem"
                activeStateEnabled={false}
            >
                <ItemDragging
                    onDragChange={onDragChange}
                    onDragStart={onDragStart}
                    onRemove={onRemoveHandler}
                    onAdd={(e) => onAddHandler(e)}
                    handle=''
                    dragDirection={dragDirection}
                    allowReordering={allowReordering}
                    group={groupName}
                    data={props.title}
                />
            </List>
        </div>
    );
}


