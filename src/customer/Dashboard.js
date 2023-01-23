import React, { Component } from "react";
import organic from "../components/wasteimages/organic.jpg";
import hazardous from "../components/wasteimages/hazardous.jpg";
import solid from "../components/wasteimages/solid.jpg";
import liquid from "../components/wasteimages/liquid.jpg";
import recyclable from "../components/wasteimages/recyclable.jpg";
import general from "../components/wasteimages/general.jpg";
class Dashboard extends Component {
  state = {};
  render() {
    return (
        <>
      <div class="container">
        <h1 className="text-center my-2">Welcome User</h1>
        <div class="row ">
          <div class="col-sm-4">
            <div class="card shadow-lg p-3 mb-5 bg-white rounded">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1<span class="visually-hidden">unread messages</span>
              </span>
              <h5 class="card-header">Organic waste order's</h5>
              <img src={organic} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        What is Organic-waste?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong>
                          Organic wastes contain materials which originated from
                          living organisms.Organic materials found in municipal
                          solid waste include food, paper, wood, sewage sludge ,
                          and yard waste
                        </strong>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <ul class="list-group my-2">
                  <li class="list-group-item">Your <strong>Number</strong> of Organic waste order :- 0</li>
                  <li class="list-group-item">Your <strong>Amount</strong> of Organic waste order :- 0</li>
                </ul>  
                <button href="#" class="btn btn-success d-block mx-auto">
                  order now
                </button>
                
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                2<span class="visually-hidden">unread messages</span>
              </span>
              <h5 class="card-header">Hazardous waste order's</h5>
              <img src={hazardous} class="card-img-top" alt="..."></img>
              <div class="card-body">
              <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTow"
                      >
                        What is Hazardous-waste?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body ">
                        <strong class="text-left">
                        Hazardous waste is a waste with properties that make it dangerous or capable of having a harmful effect on human health or the environment.Paints and solvents,Automotive wastes,Pesticides,Mercury-containing wastes 
                        </strong>
                        
                      </div>
                    </div>
                  </div>
                </div>
                <ul class="list-group my-2">
                  <li class="list-group-item">Your <strong>Number</strong> of Hazardous waste order :-0</li>
                  <li class="list-group-item">Your <strong>Amount</strong> of Hazardous waste order :-0</li>
                </ul>
                <button href="#" class="btn btn-success d-block mx-auto">
                  order now
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3<span class="visually-hidden">unread messages</span>
              </span>
              <h5 class="card-header">Solid waste order's</h5>
              <img src={solid} class="card-img-top" alt="..."></img>
              <div class="card-body">
              <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        What is Solid-waste?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body ">
                        <strong class="text-left">
                        Solid waste is the unwanted or useless solid materials generated from human activities in residential, industrial or commercial areas.garbage, construction debris, commercial refuse, sludge from water supply or waste treatment plants, or air pollution control facilities, and other discarded materials.
                        </strong>
                
                        
                      </div>
                    </div>
                  </div>
                </div>
                <ul class="list-group my-2">
                  <li class="list-group-item">Your <strong>Number</strong> of Solid waste order :- 0</li>
                  <li class="list-group-item">Your <strong>Amount</strong> of Solid waste order :- 0</li>
                </ul>
                <button href="#" class="btn btn-success d-block mx-auto">
                  order now
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                4<span class="visually-hidden">unread messages</span>
              </span>
              <h5 class="card-header">liquid waste order's</h5>
              <img src={liquid} class="card-img-top" alt="..."></img>
              <div class="card-body">
              <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        What is Liquid-waste?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <strong class="text-left">
                        Liquid waste can be defined as such Liquids as wastewater, fats, oils or grease (FOG), used oil, liquids, solids, gases, or sludges and hazardous household liquids. These liquids that are hazardous or potentially harmful to human health or the environment. 
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                <ul class="list-group my-2">
                  <li class="list-group-item">Your <strong>Number</strong> of Liquid waste order :- 0</li>
                  <li class="list-group-item">Your <strong>Amount</strong> of Liquid waste order :- 0</li>
                </ul>
                <button href="#" class="btn btn-success d-block mx-auto">
                  order now
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                5<span class="visually-hidden">unread messages</span>
              </span>
              <h5 class="card-header">Recyclable waste order's</h5>
              <img src={recyclable} class="card-img-top" alt="..."></img>
              <div class="card-body">
              <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        What is Recyclable-waste?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body ">
                        <strong class="text-left">
                        recyclable waste means by waste that can be used to produce new goods by changing their form in the process so that they are no longer recognizable as waste.What is recyclable waste examples?
Recyclable materials include many kinds of glass, paper, cardboard, metal, plastic, tires, textiles, batteries, and electronics. 
                        </strong>
                
                        
                      </div>
                    </div>
                  </div>
                </div>
                <ul class="list-group my-2">
                  <li class="list-group-item">Your <strong>Number</strong> of Recyclable waste order :- 0</li>
                  <li class="list-group-item">Your <strong>Amount</strong> of Recyclable waste order :- 0</li>
                </ul>
                <button href="#" class="btn btn-success d-block mx-auto">
                  order now
                </button>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card shadow p-3 mb-5 bg-white rounded">
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                6<span class="visually-hidden">unread messages</span>
              </span>
              <h5 class="card-header">Total waste order's</h5>

              <img src={general} class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Your waste management states look great!!</h5>
                <ul class="list-group my-2">
                  <li class="list-group-item">Your <strong>Number</strong> of waste order :- 0</li>
                  <li class="list-group-item">Your <strong>Amount</strong> of waste order :- 0</li>
                </ul>
                <button href="#" class="btn btn-success d-block mx-auto">
                  order now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Dashboard;
