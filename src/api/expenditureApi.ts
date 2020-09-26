import { NewExpenditure, Expenditure, Category } from "../modules/types";

export type ApiResponse<T> = {
    code: number;
    message?: string;
    error: boolean;
    data: T;
};

const apiResponse = <T>(data: T, message?: string): ApiResponse<T> => ({
    code: 200,
    message,
    error: false,
    data
});

class ApiServer {
    constructor(
        public _categories: Category[],
        private _nextId: number,
        public _expenditures: Expenditure[]
    ) {}

    get categories() {
        return this._categories;
    }

    get expenditures() {
        return this._expenditures;
    }

    expenditureList(category: Category): Expenditure[] {
        return this._expenditures.filter(expenditure => category.id === expenditure.category.id);
    }
    insertExpenditure(expenditure: NewExpenditure): void {
        this._expenditures = this._expenditures.concat({
            ...expenditure,
            id: this._nextId,
            onUpdate: false
        });
        this._nextId++;
    }
    updateExpenditure(expenditure: Expenditure): void {
        this._expenditures = this._expenditures.map(exp =>
            exp.id === expenditure.id
                ? expenditure
                : exp
        );
    }
    deleteExpenditure(id: number): void {
        this._expenditures = this._expenditures.filter(expenditure => expenditure.id !== id);
    }
}
const apiServer = new ApiServer([
        {id: 0, label: '전체'},
        {id: 1, label: '식사'},
        {id: 2, label: '식료품'},
        {id: 3, label: '교통'},
        {id: 4, label: '생활'},
        {id: 5, label: '의료'}
    ],

6,
[
    {
        id: 1,
        category: {id: 1, label: '식사'},
        title: "용개반점",
        cost: 7000,
        onUpdate: false
    },
    {
        id: 2,
        category: {id: 2, label: '식료품'},
        title: "양배추",
        cost: 5000,
        onUpdate: false
    },
    {
        id: 3,
        category: {id: 3, label: '교통'},
        title: "택시비",
        cost: 20000,
        onUpdate: false
    },
    {
        id: 4,
        category: {id: 4, label: '생활'},
        title: "관리비",
        cost: 100000,
        onUpdate: false
    },
    {
        id: 5,
        category: {id: 5, label: '의료'},
        title: "병원 진료",
        cost: 7000,
        onUpdate: false
    }
]);

export function categoryApi(): ApiResponse<Category[]> {
    return apiResponse(apiServer.categories);
};

export function selectApi(category: Category | undefined = {id: 0}): ApiResponse<Expenditure[]> {
    if (category.id === 0) return apiResponse(apiServer.expenditures);
    return apiResponse(apiServer.expenditureList(category));
};

export function insertApi(data: NewExpenditure): ApiResponse<number> {
    apiServer.insertExpenditure(data);
    return apiResponse(1, 'Insert Request Success!');
};

export function updateApi(data: Expenditure): ApiResponse<number> {
    apiServer.updateExpenditure(data);
    return apiResponse(1, 'Update Request Success!');
};

export function deleteApi(id: number): ApiResponse<number> {
    apiServer.deleteExpenditure(id);
    return apiResponse(1, 'Delete Request Success!');
};