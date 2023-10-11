import {useState, useEffect} from 'react';
import {url} from '../data';
import {Ticket} from '../types/types';

export function useTickets() {
  const [data, setData] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url + 'tickets')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, []);

  return {data, error, loading};
}
