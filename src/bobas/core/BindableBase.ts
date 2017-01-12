/**
 * 可监听的对象
 */
export abstract class BindableBase {
    
    constructor() {

    }
    
    /**
     * 通知属性改变
     */
    protected firePropertyChanged(property: string, newValue: any, oldValue: any){
        
    }
}
