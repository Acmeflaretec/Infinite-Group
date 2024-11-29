import { Button, Grid, TextField, IconButton, Box } from '@mui/material';
import Input from 'components/Input';
import PageLayout from 'layouts/PageLayout';
import React, {useEffect,useState } from 'react';
import Typography from 'components/Typography';
import toast from 'react-hot-toast';
import { useGetCareersById, useUpdateCareers, useDeleteCareers } from 'queries/ProductQuery';
import { useNavigate, useParams } from 'react-router-dom';
import { Delete } from '@mui/icons-material';

const EditCareers = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const { data, isLoading } = useGetCareersById({ id });

  useEffect(() => {
    if (data?.data) {
      console.log('data?.data', data?.data);
      setDetails(data.data);
    }
  }, [data]);

  const { mutateAsync: updateProduct, isLoading: loading } = useUpdateCareers();
  const { mutateAsync: deleteProduct, isLoading: deleting } = useDeleteCareers();

  const handleChange = (e) => {
    setDetails(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    try {
      const formData = new FormData();
      for (const key in details) {
        if (details.hasOwnProperty(key) && key !== "workingConditions" && key !== "jobRequirements" && key !== "dutiesAndResponsibilities") {
          formData.append(key, details[key]);
        }
      }
      details?.dutiesAndResponsibilities?.forEach(fit => {
        if (fit === '') {

        } else {
          return formData.append('dutiesAndResponsibilities', fit)
        }
      });
      details?.workingConditions?.forEach(feat => {
        if (feat === '') {

        } else {
          return formData.append('workingConditions', feat)
        }
      });
      details?.jobRequirements?.forEach(jobRequirementsif => {
        if (jobRequirementsif === '') {

        } else {
          return formData.append('jobRequirements', jobRequirementsif)
        }
      });

      updateProduct(formData)
        .then((res) => {
          if (res) {
            toast.success(res?.message ?? "Careers updated successfully");
            navigate('/careers');
          }
        })
        .catch((err) => {
          toast.error(err?.message ?? "Something went wrong");
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = () => {
    deleteProduct(details)
      .then((res) => {
        if (res) {
          toast.success(res?.message ?? "Product deleted successfully");
          navigate('/careers');
        }
      })
      .catch((err) => {
        toast.error(err?.message ?? "Something went wrong");
      });
  };


  const handleworkingConditionsChange = (index, value) => {
    const newworkingConditions = [...details.workingConditions];
    newworkingConditions[index] = value;
    setDetails(prevData => ({ ...prevData, workingConditions: newworkingConditions }));
  };
  const handleAddworkingConditions = () => {
    setDetails(prevData => ({ ...prevData, workingConditions: [...prevData.workingConditions, ''] }));
  };
  const handleRemoveworkingConditions = (index) => {
    const newworkingConditions = details.workingConditions.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, workingConditions: newworkingConditions }));
  };



  const handledutiesAndResponsibilitiesChange = (index, value) => {
    const newworkingConditions = [...details.dutiesAndResponsibilities];
    newworkingConditions[index] = value;
    setDetails(prevData => ({ ...prevData, dutiesAndResponsibilities: newworkingConditions }));
  };
  const handleAdddutiesAndResponsibilities = () => {
    setDetails(prevData => ({ ...prevData, dutiesAndResponsibilities: [...prevData.dutiesAndResponsibilities, ''] }));
  };
  const handleRemovedutiesAndResponsibilities = (index) => {
    const newworkingConditions = details.dutiesAndResponsibilities.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, dutiesAndResponsibilities: newworkingConditions }));
  };



  const handlejobRequirementsChange = (index, value) => {
    const newjobRequirements = [...details.jobRequirements];
    newjobRequirements[index] = value;
    setDetails(prevData => ({ ...prevData, jobRequirements: newjobRequirements }));
  };
  const handleAddjobRequirements = () => {
    setDetails(prevData => ({ ...prevData, jobRequirements: [...prevData.jobRequirements, ''] }));
  };
  const handleRemovejobRequirements = (index) => {
    const newjobRequirements = details.jobRequirements.filter((_, i) => i !== index);
    setDetails(prevData => ({ ...prevData, jobRequirements: newjobRequirements }));
  };

  return (
    <PageLayout title={'Edit Careers'}>
      {isLoading ? <Typography fontSize={14} sx={{ paddingX: 5 }}>loading...</Typography> :
        <Grid container spacing={5} display={'flex'} direction={'row'} p={8}>
          <Grid item container spacing={2} xs={12} sm={12} md={6} py={5}>

            <Grid item xs={12} sm={12} md={12}>
              <Input
                required
                placeholder="job name"
                id="name"
                name="name"
                value={details?.name || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                placeholder="place"
                name="place"
                value={details?.place || ''}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input
                required
                placeholder="job Times"
                id="times"
                name="times"
                value={details?.times || ''}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Input
                id="summary"
                placeholder="job summary"
                name="summary"
                value={details?.summary || ''}
                onChange={handleChange}
                multiline
                rows={5}
              />
            </Grid>

            <Grid item xs={12}>
              {details?.dutiesAndResponsibilities?.map((dutiesAndResponsibilities, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <TextField
                    placeholder={`Duties And Responsibilities ${index + 1}`}
                    value={dutiesAndResponsibilities}
                    onChange={(e) => handledutiesAndResponsibilitiesChange(index, e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  {details.dutiesAndResponsibilities.length > 1 && (
                    <IconButton onClick={() => handleRemovedutiesAndResponsibilities(index)}>
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              ))}
              <Button onClick={handleAdddutiesAndResponsibilities} variant="contained" color="primary" fullWidth className="mt-4">
                Duties And Responsibilities
              </Button>
            </Grid>

            <Grid item xs={12}>
              {details?.workingConditions?.map((workingConditions, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <TextField
                    placeholder={`workingConditions ${index + 1}`}
                    value={workingConditions}
                    onChange={(e) => handleworkingConditionsChange(index, e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  {details.workingConditions.length > 1 && (
                    <IconButton onClick={() => handleRemoveworkingConditions(index)}>
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              ))}
              <Button onClick={handleAddworkingConditions} variant="contained" color="primary" fullWidth className="mt-4">
                Add working conditions
              </Button>
            </Grid>

            <Grid item xs={12}>
              {details?.jobRequirements?.map((jobRequirements, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <TextField
                    // label={`jobRequirements ${index + 1}`}
                    placeholder={`jobRequirements ${index + 1}`}
                    value={jobRequirements}
                    onChange={(e) => handlejobRequirementsChange(index, e.target.value)}
                    fullWidth
                    margin="normal"
                    required
                  />
                  {details.jobRequirements.length > 1 && (
                    <IconButton onClick={() => handleRemovejobRequirements(index)}>
                      <Delete />
                    </IconButton>
                  )}
                </Box>
              ))}
              <Button onClick={handleAddjobRequirements} variant="contained" color="primary" fullWidth className="mt-4">
                Add job Requirement
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleSubmit}>Update Careers</Button>
            <Button color="secondary" onClick={handleDelete} disabled={deleting}>Delete Careers</Button>
          </Grid>


        </Grid>}
    </PageLayout>
  );
};

export default EditCareers;
