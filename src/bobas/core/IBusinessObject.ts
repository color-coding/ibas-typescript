/**
* 业务对象
*/
export interface IBusinessObject {
    /**
     * 获取属性的值
     * @param property 属性名称
    */
    getProperty<P>(property: string): P;

    /**
     * 设置属性的值
     * @param property 属性名称
     * @param value 值
    */
    setProperty<P>(property: string, value: P);

}