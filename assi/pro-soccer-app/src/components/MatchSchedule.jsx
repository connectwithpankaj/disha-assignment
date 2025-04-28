import { useState } from 'react';
import { Card, ListGroup, Nav } from 'react-bootstrap';

const MatchSchedule = () => {
  const [activeTab, setActiveTab] = useState('nextMatch');

  const matches = [
    { date: '01 Juni 19:00', team1: 'Juventus' , team2 :'Pro Soccer' },
    { date: '06 Juni 19:00', team1: 'Pro Soccer' , team2 : 'Viorentina' },
    { date: '12 Juni 19:00', team1: 'Pro Soccer' , team2 : 'ACE Milan' },
    { date: '16 Juni 19:00', team1: 'Atlantas' , team2 : 'Pro Soccer' },
    { date: '21 Juni 19:00', team1: 'Pro Soccer' , team2 : 'Navoli' },
    { date: '25 Juni 19:00', team1: 'Pro Soccer' , team2 : 'Gemoa' },
    { date: '30 Juni 19:00', team1: 'Pro Soccer' , team2 : 'Samdorio' },
  ];

  return (
    <Card className="mb-4 booking-table">
      <Card.Header className="p-0">
        <Nav variant="tabs" activeKey={activeTab} className="booking-tabs" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
          <Nav.Item>
            <Nav.Link eventKey="nextMatch">NEXT MATCH</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="trainingSchedule">TRAINING SCHEDULE</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="leagueTable">LEAGUE TABLE</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <ListGroup variant="flush">
        {activeTab === 'nextMatch' && matches.map((match, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <span>{match.date}</span>
            <span className="fw-bold">{match.team1}</span>
            <span className="fw-bold">{match.team2}</span>
          </ListGroup.Item>
        ))}
        {activeTab !== 'nextMatch' && (
          <ListGroup.Item className="text-center py-5">
            <em>Content coming soon...</em>
          </ListGroup.Item>
        )}
      </ListGroup>
    </Card>
  );
};

export default MatchSchedule;
