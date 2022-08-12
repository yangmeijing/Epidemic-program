export interface ChinaTotal {
    noInfect: number;
    nowLocalWzz: number;
    localConfirmAdd: number;
    localConfirm: number;
    mRiskTime: string;
    heal: number;
    dead: number;
    nowSevere: number;
    noInfectH5: number;
    local_acc_confirm: number;
    deadAdd: number;
    mtime: string;
    mediumRiskAreaNum: number;
    confirm: number;
    importedCase: number;
    showLocalConfirm: number;
    localConfirmH5: number;
    localWzzAdd: number;
    confirmAdd: number;
    highRiskAreaNum: number;
    nowConfirm: number;
    suspect: number;
    showlocalinfeciton: number;
}

export interface ChinaAdd {
    noInfect: number;
    localConfirm: number;
    localConfirmH5: number;
    heal: number;
    nowConfirm: number;
    suspect: number;
    importedCase: number;
    noInfectH5: number;
    confirm: number;
    dead: number;
    nowSevere: number;
}

export interface ShowAddSwitch {
    suspect: boolean;
    dead: boolean;
    heal: boolean;
    importedCase: boolean;
    noInfect: boolean;
    localConfirm: boolean;
    localinfeciton: boolean;
    all: boolean;
    confirm: boolean;
    nowConfirm: boolean;
    nowSevere: boolean;
}

export interface Today {
    confirm: number;
    isUpdated: boolean;
}

export interface Total {
    heal: number;
    mtime: string;
    adcode: string;
    dead: number;
    provinceLocalConfirm: number;
    continueDayZeroLocalConfirmAdd: number;
    nowConfirm: number;
    highRiskAreaNum: number;
    confirm: number;
    showRate: boolean;
    showHeal: boolean;
    wzz: number;
    mediumRiskAreaNum: number;
    continueDayZeroLocalConfirm: number;
}

export interface Today2 {
    tip: string;
    wzz_add: number;
    local_confirm_add: number;
    abroad_confirm_add: number;
    dead_add: number;
    confirm: number;
    confirmCuts: number;
    isUpdated: boolean;
}

export interface Total2 {
    nowConfirm: number;
    showHeal: boolean;
    continueDayZeroLocalConfirmAdd: number;
    adcode: string;
    confirm: number;
    showRate: boolean;
    wzz: number;
    dead: number;
    mediumRiskAreaNum: number;
    highRiskAreaNum: number;
    continueDayZeroConfirmAdd: number;
    heal: number;
    provinceLocalConfirm: number;
    continueDayZeroConfirm: number;
    mtime: string;
}

export interface Today3 {
    confirm: number;
    confirmCuts: number;
    isUpdated: boolean;
    wzz_add: string;
    local_confirm_add: number;
}

export interface Total3 {
    heal: number;
    confirm: number;
    wzz: number;
    mediumRiskAreaNum: number;
    highRiskAreaNum: number;
    showHeal: boolean;
    provinceLocalConfirm: number;
    mtime: string;
    adcode: string;
    nowConfirm: number;
    dead: number;
    showRate: boolean;
    continueDayZeroLocalConfirmAdd: number;
    continueDayZeroLocalConfirm: number;
    grade: string;
}

export interface Child2 {
    name: string;
    adcode: string;
    date: string;
    today: Today3;
    total: Total3;
}

export interface Child {
    name: string;
    adcode: string;
    date: string;
    today: Today2;
    total: Total2;
    children: Child2[];
}

export interface AreaTree {
    name: string;
    today: Today;
    total: Total;
    children: Child[];
}

export interface Diseaseh5Shelf {
    lastUpdateTime: string;
    chinaTotal: ChinaTotal;
    chinaAdd: ChinaAdd;
    isShowAdd: boolean;
    showAddSwitch: ShowAddSwitch;
    areaTree: AreaTree[];
}

export interface LocalCityNCOVDataList {
    adcode: string;
    local_confirm_add: number;
    local_wzz_add: string;
    mediumRiskAreaNum: number;
    highRiskAreaNum: number;
    province: string;
    city: string;
    date: string;
    isUpdated: boolean;
    mtime: string;
    isSpecialCity: boolean;
}

export interface RootObject {
    diseaseh5Shelf: Diseaseh5Shelf;
    localCityNCOVDataList: LocalCityNCOVDataList[];
}


