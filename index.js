var json = { title: "Evaluación", showProgressBar: "top", pages: [
	{questions: [
        { type: "radiogroup", name: "sexo", title: "¿Eres?",
            choices: ["Hombre", "Mujer"],isRequired: true},
        { type: "radiogroup", name: "edad", title: "¿Qué edad tienes?",
            choices: ["Menos de 26 años","Entre 26 y 35 años","Entre 36 y 45 años","Entre 46 y 55 años","Más de 55 años"],isRequired: true},
        { type: "radiogroup", name: "trabajo", title: "¿Qué parte del trabajo familiar y doméstico haces tú?",
            choices: ["Soy la/el principal responsable y hago la mayor parte de tareas familiares y domésticas",
                                    "Hago aproximadamente la mitad de las tareas familiares y doméstica",
                                    "Hago más o menos una cuarta parte de las tareas familiares y domésticas",
                                    "Sólo hago tareas muy puntuales", 
                                    "No hago ninguna o casi ninguna de estas tareas"
		],isRequired: true},
		{ type: "matrix", name: "Domestico", title: "Contesta a las siguientes preguntas sobre los problemas para compaginar las tareas doméstico-familiares y el empleo",
            columns: [{ value: 1, text: "Siempre" },
                { value: 2, text: "Muchas veces" },
                { value: 3, text: "Algunas veces" },
                { value: 4, text: "Sólo alguna vez" },
                { value: 5, text: "Nunca" }],
            rows: [{ value: "tareas", text: "Si faltas algún día de casa, ¿las tareas domésticas que realizas se quedan sin hacer?" },
                { value: "empresa", text: "Cuando estás en la empresa ¿piensas en las tareas domésticas y familiares?"},
                { value: "momentos", text: "¿Hay momentos en los que necesitarías estar en la empresa y en casa a la vez? " }],isRequired: true}		
    ]},
    {questions: [
		{ type: "radiogroup", name: "trabajo", title: "En general, dirías que tu salud es:",
            choices: ["Excelente","Muy buena","Buena","Regular","Mala"],isRequired: true},
		{ type: "matrix", name: "Domestico", title: "Por favor, di si te parece CIERTA O FALSA cada una de las siguientes frases",
            columns: [{ value: 1, text: "Totalmente cierta" },
                { value: 2, text: "Bastante cierta" },
                { value: 3, text: "No lo sé" },
                { value: 4, text: "Bastante falsa" },
                { value: 5, text: "Totalmente falsa" }],
            rows: [{ value: "enfermo", text: "Me pongo enfermo/a más fácilmente que otras personas" },
                { value: "cualquiera", text: "Estoy tan sana/o como cualquiera" },
                { value: "empeorar", text: "Creo que mi salud va a empeorar " },
				{ value: "excelente", text: "Mi salud es excelente" }
				],isRequired: true},
		{ type: "matrix", name: "Domestico", title: "DURANTE LAS ÚLTIMAS CUATRO SEMANAS. ¿Cómo te has sentido?",
            columns: [{ value: 1, text: "Siempre" },
                { value: 2, text: "Casi Siempre" },
                { value: 3, text: "Muchas veces" },
                { value: 4, text: "Algunas veces" },
                { value: 5, text: "Sólo alguna vez" },
				{ value: 5, text: "Nunca" }
				],
            rows: [{ value: "nervioso", text: "¿has estado muy nervioso/a?" },
                { value: "animarte", text: "¿te has sentido tan bajo/a de moral que nada podía animarte?" },
                { value: "tranquila", text: "¿te has sentido calmada/o y tranquila/o?" },
				{ value: "triste", text: "¿te has sentido desanimado/a y triste?" },
				{ value: "feliz", text: "¿te has sentido feliz?" },
                { value: "vitalidad", text: "¿te has sentido llena/o de vitalidad?" },
                { value: "energía", text: "¿has tenido mucha energía?" },
				{ value: "agotado", text: "¿te has sentido agotado/a?" },
				{ value: "cansada", text: "¿te has sentido cansada/o?"}
				],isRequired: true},			
		{ type: "matrix", name: "Domestico", title: "¿DURANTE LAS ÚLTIMAS CUATRO SEMANAS con qué frecuencia has tenido los siguientes problemas?",
            columns: [{ value: 1, text: "Siempre" },
                { value: 2, text: "Casi Siempre" },
                { value: 3, text: "Muchas veces" },
                { value: 4, text: "Algunas veces" },
                { value: 5, text: "Sólo alguna vez" },
				{ value: 5, text: "Nunca" }
				],
            rows: [{ value: "nervioso", text: "No he tenido ánimos para estar con gente" },
                { value: "animarte", text: "No he podido dormir bien " },
                { value: "tranquila", text: "He estado irritable  " },
				{ value: "triste", text: "Me he sentido agobiado/a" },
				{ value: "feliz", text: "¿Has sentido opresión o dolor en el pecho?" },
                { value: "vitalidad", text: "¿Te ha faltado el aire?  " },
                { value: "energía", text: "¿Has sentido tensión en los músculos?  " },
				{ value: "agotado", text: "¿Has tenido dolor de cabeza? " },
				{ value: "cansada", text: "¿Has tenido problemas para concentrarte?"},
				{ value: "energía", text: "	¿Te ha costado tomar decisiones?" },
				{ value: "agotado", text: "¿Has tenido dificultades para acordarte de las cosas?" },
				{ value: "cansada", text: "¿Has tenido dificultades para pensar de forma clara? "}
				],isRequired: true},					
    ]},
    {questions: [
		{type:"text", name:"name", title: "Indica en qué departamento o sección trabajas en la actualidad", placeHolder:"", isRequired: true},
		{type:"text", name:"birthdate", title: "Señala el puesto de trabajo que ocupas en la actualidad.", placeHolder:"", isRequired: true},
        { type: "radiogroup", name: "price to competitors",
            title: "Compared to our competitors, do you feel the Product is",
            choices: ["Less expensive", "Priced about the same", "More expensive", "Not sure"]},
        { type: "radiogroup", name: "price", title: "Do you feel our current price is merited by our product?",
            choices: ["correct|Yes, the price is about right",
                "low|No, the price is too low for your product",
                "high|No, the price is too high for your product"]},
        { type: "multipletext", name: "pricelimit", title: "What is the... ",
            items: [{ name: "mostamount", title: "Most amount you would every pay for a product like ours" },
                { name: "leastamount", title: "The least amount you would feel comfortable paying" }]}
    ]},
    { questions: [
        { type: "text", name: "email",
            title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."}
    ]}
]};

Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap";


var mycustomSurveyStrings = {
    pagePrevText: "Atras",
    pageNextText: "Siguiente",
    completeText: "Completado",
	progressText: "Pagina {0} de {1}",
	 requiredError: "Por favor conteste la pregunta" ,
	completingSurvey: "Le Agradecemos que haya terminado con el Test Satisfactoriamente"
};

var myCss = {
	matrix: {root: "table table-bordered"},
	title: "bg bg-info",
	navigationButton: "btn btn-primary"
};
Survey.surveyLocalization.locales["my"] = mycustomSurveyStrings;
json.locale = "my";
var model = new Survey.Model(json);

$("#surveyElement").Survey({model:model , css: myCss});