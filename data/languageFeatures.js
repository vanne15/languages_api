const languageFeatures = [
    [
        { language: 'Human', featureId: 0, feature: 'Print Zeile', example: 'Gebe Variable in Console aus' },
        { language: 'PHP', featureId: 0, feature: 'Print Zeile', example: 'print_r ($variable)' },
        { language: 'C_Sharp', featureId: 0, feature: 'Print Zeile', example: 'Console.WriteLine(variable)' },
        { language: 'nodeJs', featureId: 0, feature: 'Print Zeile', example: 'Console.log(variable)' },
    ],
    [
        { language: 'Human', featureId: 1, feature: 'Konstante', example: 'Konstante definieren' },
        { language: 'PHP', featureId: 1, feature: 'Print Zeile', example: 'define("KONSTANTE", \'Hallöle\');' },
        { language: 'C_Sharp', featureId: 1, feature: 'Print Zeile', example: 'const string KONSTANTE = \'Hallöle\';' },
        { language: 'nodeJs', featureId: 1, feature: 'Print Zeile', example: 'const  KONSTANTE = \'Hallöle\';' }
    ],
    [
        { language: 'Human', featureId: 2, feature: 'Konstante', example: 'Konstante definieren' },
        { language: 'PHP', featureId: 2, feature: 'Print Zeile', example: 'define("KONSTANTE", \'Hallöle\');' },
        { language: 'C_Sharp', featureId: 2, feature: 'Print Zeile', example: 'const string KONSTANTE = \'Hallöle\';' },
        { language: 'nodeJs', featureId: 2, feature: 'Print Zeile', example: 'const  KONSTANTE = \'Hallöle\';' }
    ]
];
module.exports = languageFeatures;
