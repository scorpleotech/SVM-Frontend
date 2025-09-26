// PranaClass API service
import { api } from './api';

const PRANACLASS_BASE_URL = '/api/pranaclass';

export const pranaClassApi = {
  // Create new PranaClass reservation
  createReservation: async (reservationData) => {
    try {
      const response = await api.post(`${PRANACLASS_BASE_URL}/reserve`, reservationData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Create reservation and proceed to payment
  createReservationWithPayment: async (reservationData) => {
    try {
      const response = await api.post(`${PRANACLASS_BASE_URL}/reserve`, {
        ...reservationData,
        proceedToPayment: true
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get all reservations (admin)
  getAllReservations: async () => {
    try {
      const response = await api.get(`${PRANACLASS_BASE_URL}/`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get single reservation by ID
  getReservationById: async (id) => {
    try {
      const response = await api.get(`${PRANACLASS_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Update reservation status
  updateReservation: async (id, updateData) => {
    try {
      const response = await api.put(`${PRANACLASS_BASE_URL}/${id}`, updateData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Delete reservation
  deleteReservation: async (id) => {
    try {
      const response = await api.delete(`${PRANACLASS_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get reservations by status
  getReservationsByStatus: async (status) => {
    try {
      const response = await api.get(`${PRANACLASS_BASE_URL}/status/${status}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get payment status
  getPaymentStatus: async (id) => {
    try {
      const response = await api.get(`/payment/pranaclass/status/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Initiate payment
  initiatePayment: async (id) => {
    try {
      // This will redirect to payment gateway
      window.open(`${process.env.REACT_APP_API_URL}/payment/pranaclass/pay/${id}`, '_blank');
      return { message: 'Redirecting to payment gateway...' };
    } catch (error) {
      throw error.response?.data || error;
    }
  }
};

export default pranaClassApi;
