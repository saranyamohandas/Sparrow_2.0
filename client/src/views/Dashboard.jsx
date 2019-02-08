import React from "react";
// nodejs library that concatenates classes
import API from "../API/API"
import Map from "../views/Map" ;



// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledAlert
} from "reactstrap";


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
      // userId : this.props.location.state
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  componentDidMount() {
    // getUserTasks = (userId) => {
      console.log("mount",this.props.location);
    // API.getTasks(this.state.userId).then(res=>
    // {
    //     console.log("tasks",res)
    //   })
  }

  //}
  


  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="12" md="12">
              <Card className="card-tasks">
                <CardHeader>
                  <h6 className="title d-inline">Tasks(5)</h6>
                  <p className="card-category d-inline"> today</p>
                  <UncontrolledDropdown>
                    <DropdownToggle
                      caret
                      className="btn-icon"
                      color="link"
                      data-toggle="dropdown"
                      type="button"
                    >
                      <i className="tim-icons icon-cloud-upload-94" />
                    </DropdownToggle>
                    <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Push to Global Dash
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Track Sparrow Task
                      </DropdownItem>
                      <DropdownItem
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Delete Task
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </CardHeader>
                <CardBody>
                  <div className="table-full-width table-responsive">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Tax Documents</p>
                            <p className="text-muted">
                              Fill in forms for accountant. They are due on 02/08/2019
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Pick Up Dry Cleaning</p>
                            <p className="text-muted">
                            Pick Up Dry Cleaning from 3290 California. 
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">DinnerReservations</p>
                            <p className="text-muted">
                              Call Spruce for reservations for Valentine's Day.
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Find Landscaper</p>
                            <p className="text-muted">
                              Hire new landscaper for property in Mill Valley. Needed three times a month.
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Pick up Birthday Gift</p>
                            <p className="text-muted">
                              Get gift for Lalia 4th birthday. The party is this Sunday.
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Get Groceries</p>
                            <p className="text-muted">
                             Stop by Whole foods and pick up Pasta, Alfredo Sauce, Parmasan Cheese and chicken breasts.
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <FormGroup check>
                              <Label check>
                                <Input defaultValue="" type="checkbox" />
                                <span className="form-check-sign">
                                  <span className="check" />
                                </span>
                              </Label>
                            </FormGroup>
                          </td>
                          <td>
                            <p className="title">Apple Store</p>
                            <p className="text-muted">
                              Stop by Apple store and argue about anything and everything Apple.
                            </p>
                          </td>
                          <td className="td-actions text-right">
                            <Button
                              color="link"
                              id="tooltip636901683"
                              title=""
                              type="button"
                            >
                              <i className="tim-icons icon-pencil" />
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip636901683"
                              placement="right"
                            >
                              Edit Task
                            </UncontrolledTooltip>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Global Claim Board</CardTitle>
                </CardHeader>
                <CardBody>
                  <UncontrolledAlert color="success">
                    <span>
                      <b>Dog Walking - </b>
                     Please pick up Waffles from 3949 Sacramento st for a 30 minute walk.
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="warning">
                    <span>
                      <b>Garage Cleaning - </b>
                     Looking to hire a person for 6 hours to help me tidy up my garage. Offering $25 and hour.
                    </span>
                  </UncontrolledAlert>
                  <UncontrolledAlert color="primary">
                    <span>
                      <b>Dance Lessons - </b>
                     I am looking for someone that is able to teach me how to Salsa. Can pay $15 and hour.
                    </span>
                  </UncontrolledAlert>
                </CardBody>
              </Card>
            </Col>

            <Col lg="12" md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Completed Tasks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Sparrow</th>
                        <th>Date</th>
                        <th>Task</th>
                        <th>Payout</th>
                        <th className="text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>William Blakely</td>
                        <td>10/29/2018</td>
                        <td>Laundry Pick Up</td>
                        <td>$25.00</td>
                        <td className="text-center">Complete</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          
        <Map/>


        </div>
      </>
    );
  }
}

export default Dashboard;
