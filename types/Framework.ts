interface Config {
}

interface Auth {
}

interface CustomConfig {
    [key: string]: string
}

interface Custom {
    config?: CustomConfig
}

interface ModelColumn {
    readonly name: string;
    readonly dataType: string;
    readonly primaryKey?: boolean;

    [key: string]: any;
}

interface Model {
    readonly name: string;
    readonly description: string;
    columns?: ModelColumn[]

    readonly keyType?: string
    readonly primaryKey?: string
    readonly incrementing?: boolean
    readonly timestamps?: boolean
    readonly dateFormat?: string

    readonly createdAt?: 'string'
    readonly updatedAt?: 'string'

    readonly connection?: string
    readonly attributes?: object
}


export interface Framework {
    auth: Auth
    custom: Custom
    config: Config[]
    models: Model[]
    //
    // /**
    //  * Specify individual fields in items.
    //  *
    //  * @items.type integer
    //  * @items.minimum 0
    //  */
    // sizes: number[];
    //
    // /**
    //  * Or specify a JSON spec:
    //  *
    //  * @items {"type":"string","format":"email"}
    //  */
    // emails: string[];
}
