export interface actionType {
    name: string;
    description: string;
    action: Function;
    is_system: boolean;
}

export let ACTIONS: { [key: string]: actionType } = {
    "NOOP": {
        name: "No operation",
        description: "As the name suggests, no action would be performed here.",
        action: () => console.debug("NOOP performed."),
        is_system: true
    },
    "2713988b-e96d-44b0-9be3-16f419005sde": {
        name: "Log operation",
        description: "As the name suggests, logging will be done as part of the action",
        action: () => console.log("Testing the operation."),
        is_system: false
    },
    "2713988b-e96d-44b0-9be3-16f419005ade": {
        name: "miliarium",
        description: "disgradation radiobroadcaster Scolopendrellidae antesuperior octoradial ",
        action: () => console.log("miliarium action executed"),
        is_system: false
    },
    "0b0d91c8-1807-44a4-ba50-93b8c36cdb42": {
        name: "acclimate",
        description: "farrow bloodwort cephalomeningitis legrope petitionarily ",
        action: () => console.log("acclimate action executed"),
        is_system: false
    },
    "ee9f31db-66c5-4a23-adf7-f9236e6e3960": {
        name: "Kitalpha",
        description: "wealthy pegged Lophocome cheeker olivilin ",
        action: () => console.log("Kitalpha action executed"),
        is_system: false
    },
    "add3a883-8337-4170-9939-cf30eecda665": {
        name: "lucifugous",
        description: "orthovanadic cockneyship scrupulus shinning coemploy ",
        action: () => console.log("lucifugous action executed"),
        is_system: false
    },
    "7e2e91fc-9108-43ba-939f-65c0626e9ae4": {
        name: "disinfection",
        description: "unavouchably brew rhodic handleable subshrub ",
        action: () => console.log("disinfection action executed"),
        is_system: false
    },
    "51b2783a-e0bf-40c3-92b6-a6d55e44bdd6": {
        name: "Cerithium",
        description: "sunnily scoptophilic counterferment unrecognizing redismiss ",
        action: () => console.log("Cerithium action executed"),
        is_system: false
    },
    "fb00b71a-72c9-422c-8f08-87b4ef1a3e61": {
        name: "nonenrolled",
        description: "Lituola ovum unwound ringbone enchytrae ",
        action: () => console.log("nonenrolled action executed"),
        is_system: false
    },
    "4a47bfcc-99f5-4296-8e58-0dfb20d92fcb": {
        name: "semisheer",
        description: "immixture Jodo antisideric itinerant Turveydropdom ",
        action: () => console.log("semisheer action executed"),
        is_system: false
    },
    "005af382-d38f-416c-b14a-e3c6016bf7e0": {
        name: "fleckiness",
        description: "emendator dipicrylamine patricianship Karel venefical ",
        action: () => console.log("fleckiness action executed"),
        is_system: false
    },
    "edf6ee2e-fdd8-4b08-9927-3870af0e6a23": {
        name: "amyrol",
        description: "Tyroglyphidae yirk energumen reflower sterncastle ",
        action: () => console.log("amyrol action executed"),
        is_system: false
    },
    "f3f177da-715a-4dbb-8074-3172c415b1b4": {
        name: "acroasphyxia",
        description: "misquality schism galop pome semitransverse ",
        action: () => console.log("acroasphyxia action executed"),
        is_system: false
    },
    "3fc9b308-c2ce-4268-87c9-fd6a0440a898": {
        name: "Dagomba",
        description: "dyker Bumelia Cephalodiscida deceptitious impenetrative ",
        action: () => console.log("Dagomba action executed"),
        is_system: false
    },
    "dd7dbf66-4f0a-4275-acba-2c41275c7c75": {
        name: "baccheion",
        description: "mandruka steeving ephemeralness smeuse wishable ",
        action: () => console.log("baccheion action executed"),
        is_system: false
    },
    "f682e0a2-f95d-42bd-bb60-660e6314065d": {
        name: "manganblende",
        description: "phyllogenous indy participate erminites rationalism ",
        action: () => console.log("manganblende action executed"),
        is_system: false
    },
    "557fbd49-bce3-4545-bd4c-089b18f5cd5d": {
        name: "Campanula",
        description: "graciously unrecreant predelude unfulfillment bebless ",
        action: () => console.log("Campanula action executed"),
        is_system: false
    },
    "e2ad89a6-d140-4327-9fd9-8a07937988e8": {
        name: "forcepslike",
        description: "assizement unmedicated Huron subprioress antiprinciple ",
        action: () => console.log("forcepslike action executed"),
        is_system: false
    },
    "2ed04d1e-8c1b-4045-9924-75069f79d94c": {
        name: "convoke",
        description: "tracheopharyngeal Etheostomidae therial Tyrannides amylo ",
        action: () => console.log("convoke action executed"),
        is_system: false
    },
    "574dce36-94d9-42db-a55d-57ee9b4b489f": {
        name: "kuba",
        description: "acinaceous hyphodrome kumhar Sepioidea rugging ",
        action: () => console.log("kuba action executed"),
        is_system: false
    },
    "216fea60-1119-4312-bb57-7cb75a21db00": {
        name: "redbait",
        description: "strainable jutty peragration practicalizer subconcave ",
        action: () => console.log("redbait action executed"),
        is_system: false
    },
    "1f9fc81d-9f6f-49db-aa98-e578ba437227": {
        name: "quarrel",
        description: "shoddiness dyne monosulphide empasm sundryman ",
        action: () => console.log("quarrel action executed"),
        is_system: false
    },
    "3dd32236-39c6-4518-8b85-5d81eaa904f3": {
        name: "overfree",
        description: "chaguar molluscoidan fireless overillustrate offendedly ",
        action: () => console.log("overfree action executed"),
        is_system: false
    },
    "9a19c8a1-0f56-4076-aa05-60bf8e06e12a": {
        name: "topographically",
        description: "patacao subsection jobbery manliness butyrolactone ",
        action: () => console.log("topographically action executed"),
        is_system: false
    },
    "5d713c46-bf53-4181-89f2-d2f1cc211fcb": {
        name: "floutingly",
        description: "exomologesis assertory setness perisalpingitis teated ",
        action: () => console.log("floutingly action executed"),
        is_system: false
    },
    "e8d4e4ed-caa3-41ac-8684-67be062fe61b": {
        name: "sabered",
        description: "averager shammocky refutably gleemaiden buffball ",
        action: () => console.log("sabered action executed"),
        is_system: false
    },
    "0c6c0485-c80d-45c9-9606-074180f13d04": {
        name: "retonation",
        description: "heteroclite wheatgrower muleback chancre brakesman ",
        action: () => console.log("retonation action executed"),
        is_system: false
    },
    "a63ddc11-ce08-494a-9be5-b685964623cc": {
        name: "vaporosity",
        description: "benzylic fondlingly boltel wordcraft chillroom ",
        action: () => console.log("vaporosity action executed"),
        is_system: false
    },
    "43c90116-bbf9-4878-8e33-5198de4bdd01": {
        name: "introceptive",
        description: "overshade unimaginative fulminant jollytail shankings ",
        action: () => console.log("introceptive action executed"),
        is_system: false
    },
    "b759ed7b-da4f-401b-9a26-b33447b3fd42": {
        name: "Teucrian",
        description: "caudalward Limawood Icaria baggie omphalotripsy ",
        action: () => console.log("Teucrian action executed"),
        is_system: false
    },
    "e14b49ea-3aec-4aa0-9209-d8bd6335f8a2": {
        name: "straucht",
        description: "uninstanced nontemporal anthracene ophthalmorrhagia seminaristic ",
        action: () => console.log("straucht action executed"),
        is_system: false
    },
    "2f74964e-dcd8-47cf-a0f8-f78ccd3a787b": {
        name: "girling",
        description: "Trichechus sugarberry careerist preapperception stopless ",
        action: () => console.log("girling action executed"),
        is_system: false
    },

}

export const SAMPLE_ACTION: actionType = {
    name: "Sample action",
    description: "Please fill these values to create your own action",
    action: () => console.log("Sample action executed"),
    is_system: false
}
