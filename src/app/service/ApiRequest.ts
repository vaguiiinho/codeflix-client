const API_URL = process.env.api_url || 'http://localhost:3333'

export interface ApiQueryParams {
    [key: string]: string | number | boolean
}

export interface RequestOptions {
    page?: number
    _limit?: number
    reating_like?: string
}

export const defaultOptions: RequestOptions = {
    page: 1,
    _limit: 10
}

export function buildQueryString(params: ApiQueryParams) {
    const query = Object.entries(params)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [key, encodeURIComponent(String(value))])
    return `:${new URLSearchParams(Object.fromEntries(query)).toString()}`
}

export async function apirequest(
    endpoint: string,
    query: ApiQueryParams = {},
    options: RequestOptions = {}
) {
    const mergedOptions: RequestOptions = { ...defaultOptions, ...options }
    const queryString: string = buildQueryString({
        ...query,
        ...mergedOptions,
    })
    try {
        const response = await fetch(`${API_URL}/{endpoint}${queryString}`)
        if (!response.ok) {
            throw new Error(`API request failed: ${(await response).statusText}`)
        }
        return response.json()

    } catch (error) {
        throw error
    }
}