//Constructor Consultorio
function Consultorio(nombreConsultorio, paciente){
    var _nombreConsultorio = nombreConsultorio;
    var _paciente = paciente || [];
    //Creación métodos Get y Set privados para constructor Consultorio
    Object.defineProperty(this, "_nombreConsultorio",{
        get: function () {
            return _nombreConsultorio;
        },
        set: function(nuevoNombreConsultorio) {
            _nombreConsultorio = nuevoNombreConsultorio;
        }
    });
    Object.defineProperty(this, "_paciente",{
        get: function () {
            return _paciente;
        }
    });
};

//Constructor Paciente
function Paciente(nombrePaciente, edad, rut, diagnostico){
    var _nombrePaciente = nombrePaciente;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    //Creación métodos Get y Set privados para constructor Paciente
    Object.defineProperty(this, "_nombrePaciente",{
        get: function() {
            return _nombrePaciente;
        },
        set: function(nuevoNombre){
            _nombrePaciente = nuevoNombre;
        }
    });
    Object.defineProperty(this, "_edad",{
        get: function() {
            return _edad;
        },
        set: function(edad){
            _edad = edad;
        }
    });
    Object.defineProperty(this, "_rut",{
        get: function() {
            return _rut;
        },
        set: function(rut){
            _rut = rut;
        }
    });
    Object.defineProperty(this, "_diagnostico",{
        get: function() {
            return _diagnostico;
        },
        set: function(diagnostico){
            _diagnostico = diagnostico;
        }
    });
};

//Getters y Setters
Consultorio.prototype.getNombreConsultorio = function(){
    return this._getNombreConsultorio;
};
Consultorio.prototype.getPaciente = function(){
    return this._getPaciente;
};
Paciente.prototype.getNombrePaciente = function(){
    return this._nombrePaciente;
};
Paciente.prototype.getEdad = function(){
    return this._edad;
};
Paciente.prototype.getRut = function(){
    return this._rut;
};
Paciente.prototype.getDiagnostico = function(){
    return this._diagnostico;
};

Consultorio.prototype.setNombreConsultorio = function(nombreConsultorio){
    this._nombreConsultorio = nombreConsultorio;
};
Paciente.prototype.setNombrePaciente = function(nuevoNombre){
    this._nombrePaciente = nuevoNombre;
};
Paciente.prototype.setEdad = function(edad){
    this._edad = edad;
};
Paciente.prototype.setRut = function(rut){
    this._rut = rut;
};
Paciente.prototype.setDiagnostico = function(diagnostico){
    this._diagnostico = diagnostico;
};

//Método para agregar N cantidad de pacientes
Consultorio.prototype.agregarPaciente = function(nuevoPaciente){
    this._paciente.push(nuevoPaciente);
};

//Crear pacientes
var paciente_1 = new Paciente('Jose Gomez', 47, '10536481-5', 'Zoonosis');
var paciente_2 = new Paciente('Natalia Rodriguez', 33, '16931485-2', 'Asma');

//Crear consultorio (nombreConsultorio, arreglo con los objetos paciente)
var consultorio1 = new Consultorio('Providencia',[paciente_1, paciente_2]);

//Crear nuevos pacientes
var paciente_3 = new Paciente('Juan Gonzalez', 36, '16561456-9', 'Gastroenteritis Aguda');
var paciente_4 = new Paciente('Pedro Mardones', 55, '10345678-0', 'Dermatitis');

//Se agregan nuevos pacientes a Consultorio
consultorio1.agregarPaciente(paciente_3);
consultorio1.agregarPaciente(paciente_4);

//Nombre Consultorio por consola
console.log('Nombre Consultorio: ' +consultorio1._nombreConsultorio);
console.log("");

//Función para mostrar todos los pacientes y sus datos del consultorio
Consultorio.prototype.mostrarPacientes = function(){
    this._paciente.forEach(function(e){
        console.log('Nombre: '+e.getNombrePaciente());
        console.log('Edad: '+e.getEdad());
        console.log('Rut: '+e.getRut());
        console.log('Diagnóstico: '+e.getDiagnostico());
        console.log("");
    });
};

consultorio1.mostrarPacientes();

//Función para buscar un paciente en especifíco
Consultorio.prototype.buscarPaciente = function(nombrePaciente){
    //Creación de una nueva variable para agregar datos del paciente encontrado
    var pacienteEncontrado = {};

    this._paciente.forEach(function(e){
        if(e.getNombrePaciente() == nombrePaciente){
            pacienteEncontrado ={ 
                nombre: e.getNombrePaciente(),
                edad: e.getEdad(),
                rut: e.getRut(),
                diagnostico: e.getDiagnostico()
            }
            console.log('Nombre: '+e.getNombrePaciente());
            console.log('Edad: '+e.getEdad());
            console.log('Rut: '+e.getRut());
            console.log('Diagnóstico: '+e.getDiagnostico());
            console.log("");
        }   
    });

    //console.log(Object.keys(pacienteEncontrado).length);

    if(Object.keys(pacienteEncontrado).length > 0){
        console.log('Paciente Encontrado: ')
        console.log('Nombre: ' +pacienteEncontrado.nombre);
        console.log('Edad: ' +pacienteEncontrado.edad);
        console.log('Rut: ' +pacienteEncontrado.rut);
        console.log('Diagnóstico: ' +pacienteEncontrado.diagnostico);
    }else{
        console.log('Paciente no registrado');
    }
};

consultorio1.buscarPaciente("Pedro Mardones");