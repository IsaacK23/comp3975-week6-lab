import { ReactNode } from "react";
interface ListProps<T> {
    items: T[];
    render: (item: T) => ReactNode;
}
const List = <T,>({ items, render }: ListProps<T>) => {
    return (
        <>
            {items.map((item, index) => ( // could send pictures it would still know how to render item
                <span key={index}>{render(item)}</span>
            ))}
        </>
    );
};

export default List;