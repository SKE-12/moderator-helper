import { useObserver } from 'mobx-react';

function useData<T, O>(contextValue: T, selector: (store: T) => O) {
    return useObserver(() => selector(contextValue))
}

export default useData
