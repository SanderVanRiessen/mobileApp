import {useState, useEffect} from 'react';
import {url} from '../data';
import {CardProps} from '../types/types';

export function useCart() {
  const [data, setData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    setLoading(true);
    fetch(url + 'cart')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return {data, error, loading, refetch};
}

export function useDeleteCart(id: number) {
  const [data, setData] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url + `cart/${id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(json => setData(json))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, [id]);

  return {data, error, loading};
}
