module.exports={
    moduleNameMapper:{
        '^@/(.*)$':'<rootDir>/src/$1',
        '^create-api$':'<rootDir>/src/api/create-api-client.js'
    },
    moduleFileExtensions:[
        'js','json','vue'
    ],
    transform:{
        '.*\\.(vue)$':'vue-jest',
        '^.+\\.js$':'babel-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':'jest-transform-stub'
    },
    snapshotSerializers:[
        'jest-serializer-vue'
    ],
    testURL:'http://localhost/',
    collectCoverage:true,
    coverageDirectory:'<rootDir>/tests/__coverage__',
    coveragePathIgnorePatterns:['/node_modules/']
}