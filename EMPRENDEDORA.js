var m = 30;
var s = 00;

interval = setInterval(function(){setInter(); ponHTML();},1000);
		
function setInter() {           
    if(s > 0 && s <= 60) { 
        s--;
    }
    else if (m > 0 && m <= 60) {
        m--;
        s = 59;
    }                                 
    else {
        m = 0;
        s = 0;                           
        clearInterval(interval);
    }                             
}
		
function ponHTML(){
	document.getElementById("contador").innerHTML =m+":"+s;
}

var json = { title: "CAPACIDAD EMPRENDEDORA", showProgressBar: "top", pages: [
	
	{questions:[    
    	{ type: "rating", name: "E1", title: "Soy una persona que necesita del estímulo y cambio frecuente.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
      	{ type: "rating", name: "E2", title: "No importa quien sea mi interlocutor, lo escucho con atención.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },	 
    	{ type: "rating", name: "E3", title: "Soy una persona consistente con lo que pienso y hago.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E4", title: "Trato en diferentes formas de superar obstáculos que se interponen al logro de mis metas.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E5", title: "Me siento confiado en que puedo tener éxito en cualquier actividad que me propongo alcanzar.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true }
	]},
	
	{questions:[    
    	{ type: "rating", name: "E6", title: "Me gusta inventar y aprender nuevas formas de hacer las cosas.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },	 
    	{ type: "rating", name: "E7", title: "Puedo fácilmente ponerme en el lugar de otro para comprender mejor su situación.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E8", title: "Yo creo que el fin justifica los medios.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E9", title: "Puedo trabajar duro tanto tiempo como sea necesario.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E10", title: "Puedo trabajar duro tanto tiempo como sea necesario.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true }
	]},
	
	{questions:[    
    	{ type: "rating", name: "E11", title: "Si no encuentro un determinado enfoque para hacer frente a un problema, creo el ambiente para generar muchas ideas.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },	 
    	{ type: "rating", name: "E12", title: "Si no encuentro un determinado enfoque para hacer frente a un problema, creo el ambiente para generar muchas ideas.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E13", title: "Soy una persona que nunca busca transgredir las reglas.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E14", title: "Obtener logros es sobretodo asunto de voluntad y disciplina  personal.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E15", title: "Lo que me sucede la mayoría de las veces depende de mí.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true }
	]},
	
	{questions:[    
    	{ type: "rating", name: "E16", title: "Me es fácil establecer relaciones con otros.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },	 
    	{ type: "rating", name: "E17", title: "Prefiero situaciones en que puedo controlar al máximo el resultado final.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E18", title: "Hago lo que se necesita hacer sin que otros tengan que decirme que lo haga.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E19", title: "Soy una persona que llega rápidamente a acuerdos con las personas que trabaja.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E20", title: "Aprecio la dignidad entre todas las personas.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true }
	]},
	
	{questions:[    
    	{ type: "rating", name: "E21", title: "Me enfrento a los problemas en vez de perder tiempo tratando de anticiparlos.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },	 
    	{ type: "rating", name: "E22", title: "Habitualmente soy capaz de poner en operación los medios y recursos necesarios para llevar a cabo tareas.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E23", title: "Actúo muy bien en situaciones inciertas e imprevisibles.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E24", title: "No hay nada más satisfactorio que dar lo mejor de uno mismo.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E25", title: "Me gusta compartir con los demás lo que me pasa.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true }
	]},
	
	{questions:[    
    	{ type: "rating", name: "E26", title: "Abordar varias cosas a la vez crea caos.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },	 
    	{ type: "rating", name: "E27", title: "Logro que otros apoyen mis recomendaciones.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E28", title: "La posibilidad de enfrentar desafíos es lo que me atrae hacia cierta situaciones..", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E29", title: "Yo tomo en cuenta las necesidades de otras personas.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E30", title: "Si es necesario hago el trabajo de otros  para entregarlo a tiempo.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true }
	]},
	
	{questions:[    
    	{ type: "rating", name: "E31", title: "Soy fiel a las promesas que hago.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },	 
    	{ type: "rating", name: "E32", title: "Cuando estoy haciendo un trabajo para otras personas me esfuerzo en forma especial por quedar satisfecho con el trabajo.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E33", title: "Soy capaz de sincronizar actividades de diferentes personas para llegar a un resultado.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },
    	{ type: "rating", name: "E34", title: "Soy una persona que para llegar a acuerdos puedo mirar las cosas de otra manera.", 
        mininumRateDescription: "Nunca", maximumRateDescription: "Siempre",isRequired: true },    	
	]},
				
    { questions: [
        { type: "text", name: "observaciones",
            title: "Si tiene alguna observación, escríbala aquí:"}
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
	completingSurvey: "Le Agradecemos que haya terminado con el Test Emprendimiento Satisfactoriamente"
};

var myCss = {
	matrix: {root: "table table-bordered"},
	title: "bg bg-info",
	navigationButton: "btn btn-primary"
};
Survey.surveyLocalization.locales["my"] = mycustomSurveyStrings;
json.locale = "my";
var model = new Survey.Model(json);

function setvalor(val,k)
{
	var palabras = ["Muy Bajo","Bajo","Medio","Alto","Muy Alto"];
	return palabras[Math.round(val/k)-1];
}

model.onComplete.add(function(model) {
	var arr = $.map(model.data, function(el) { return parseInt(el) });
	var puntaje = [arr[5]+arr[22]+arr[10],arr[1]+arr[15]+arr[24],arr[7]+arr[12]+arr[30],arr[3]+arr[8]+arr[13]+arr[31],arr[4]+arr[9]+arr[14]+arr[20],arr[11]+arr[21]+arr[26]+arr[32],arr[18]+arr[6]+arr[33],arr[2]+arr[17]+arr[29],arr[19]+arr[23]+arr[28],arr[0]+arr[16]+arr[25]+arr[27]];
	var total = puntaje.reduce(function(a, b) { return a + b; }, 0);
	document.querySelector('#surveyResult').innerHTML = "<div class='container'><table class='table table-hover'><thead><tr><th>Areas</th><th>Puntaje</th><th>Interpretacion</th></tr></thead><tbody><tr><td>Creatividad e Innovacion</td><td>"+puntaje[0]+"</td><td>"+setvalor(puntaje[0],3)+"</td></tr><tr><td>Comunicacion</td><td>"+puntaje[1]+"</td><td>"+setvalor(puntaje[1],3)+"</td></tr><tr><td>Honestidad</td><td>"+puntaje[2]+"</td><td>"+setvalor(puntaje[2],3)+"</td>" +
    "</tr><tr><td>Tenacidad</td><td>"+puntaje[3]+"</td><td>"+setvalor(puntaje[3],4)+"</td></tr><tr><td>Autoconfianza</td><td>"+puntaje[4]+"</td><td>"+setvalor(puntaje[4],4)+"</td></tr>"+
    "<tr><td>Liderazgo y Coordinacion</td><td>"+puntaje[5]+"</td><td>"+setvalor(puntaje[5],4)+"</td></tr><tr><td>Negociacion</td><td>"+puntaje[6]+"</td><td>"+setvalor(puntaje[6],3)+"</td></tr>"+
    "<tr><td>Responsabilidad</td><td>"+puntaje[7]+"</td><td>"+setvalor(puntaje[7],3)+"</td></tr><tr><td>Altruismo</td><td>"+puntaje[8]+"</td><td>"+setvalor(puntaje[8],3)+"</td></tr>"+
    "<tr><td>Capacidad de asumir retos</td><td>"+puntaje[9]+"</td><td>"+setvalor(puntaje[9],4)+"</td></tr><tr><td><b>Total de Capacidad Emprendedora</b></td><td><b>"+total+"</b></td><td><b>"+setvalor(total,34)+"</b></td></tr>"+
    "</tbody></table>"+"<h3><b>Observaciones: </b>"+model.data["observaciones"]+"</h3></div>";
	$("#contador").remove();
});

$("#surveyElement").Survey({model:model , css: myCss});


