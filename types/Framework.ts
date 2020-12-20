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


interface Framework {
    auth: Auth
    custom: Custom
    config: Config[]
    models: Model[]
}

class ApplicationSchema{
    Framework: Framework
}
